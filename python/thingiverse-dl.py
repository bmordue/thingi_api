#!/usr/bin/env python3
"""Download Thingiverse favourites and followed creators' things."""

import argparse
import json
import os
import shutil
import sys
import time
from pathlib import Path

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

API_BASE = "https://api.thingiverse.com"
DELAY = 0.5        # seconds between API requests
MIN_FREE_MB = 500  # warn if disk space drops below this


class RateLimitAdapter(HTTPAdapter):
    def send(self, request, **kwargs):
        while True:
            r = super().send(request, **kwargs)
            if r.status_code == 429:
                wait = int(r.headers.get("Retry-After", 60))
                print(f"\n[rate limit] waiting {wait}s...")
                time.sleep(wait)
                continue
            return r


def make_session(token):
    s = requests.Session()
    s.headers.update({"Authorization": f"Bearer {token}"})
    retry = Retry(
        total=5,
        backoff_factor=2,
        status_forcelist={500, 502, 503, 504},
        allowed_methods={"GET"},
    )
    s.mount("https://", RateLimitAdapter(max_retries=retry))
    return s


def check_disk(output_dir: Path):
    free = shutil.disk_usage(output_dir).free // (1024 * 1024)
    if free < MIN_FREE_MB:
        print(f"[warn] low disk space: {free} MB free")


def get(session, endpoint, **params):
    url = f"{API_BASE}{endpoint}"
    r = session.get(url, params=params)
    r.raise_for_status()
    time.sleep(DELAY)
    return r.json()


def paginate(session, endpoint, **params):
    page = 1
    while True:
        data = get(session, endpoint, page=page, per_page=30, **params)
        if not data:
            break
        yield from data
        if len(data) < 30:
            break
        page += 1


def safe(s):
    return "".join(c if c.isalnum() or c in " ._-" else "_" for c in s).strip()


def format_size(b):
    for unit in ("B", "KB", "MB", "GB"):
        if b < 1024:
            return f"{b:.1f} {unit}"
        b /= 1024
    return f"{b:.1f} TB"


def get_thing_size(session, tid):
    try:
        files = get(session, f"/things/{tid}/files")
        return sum(f.get("size", 0) for f in files)
    except requests.HTTPError:
        return 0


def dryrun_thing(session, thing, output_dir: Path):
    tid = thing["id"]
    name = thing["name"]
    creator = thing.get("creator", {}).get("name", "unknown")
    thing_dir = output_dir / safe(creator) / f"{tid}_{safe(name)}"
    if thing_dir.exists():
        return 0  # already downloaded
    size = get_thing_size(session, tid)
    print(f"  {safe(creator)}/{tid}_{safe(name)}: {format_size(size)}")
    return size


def download_thing(session, thing, output_dir: Path):
    tid = thing["id"]
    name = thing["name"]
    creator = thing.get("creator", {}).get("name", "unknown")
    thing_dir = output_dir / safe(creator) / f"{tid}_{safe(name)}"

    if thing_dir.exists():
        print(f"  [skip] {tid} {name}")
        return

    thing_dir.mkdir(parents=True)
    print(f"  [down] {tid} {name}")

    # Save metadata
    meta = get(session, f"/things/{tid}")
    (thing_dir / "metadata.json").write_text(json.dumps(meta, indent=2))

    # Download files
    try:
        files = get(session, f"/things/{tid}/files")
    except requests.HTTPError as e:
        print(f"    [warn] could not fetch files: {e}")
        return

    for f in files:
        file_url = f.get("download_url") or f.get("public_url")
        filename = f.get("name", "unknown")
        if not file_url:
            continue
        dest = thing_dir / filename
        if dest.exists():
            continue
        try:
            r = session.get(file_url, stream=True)
            r.raise_for_status()
            tmp = dest.with_suffix(dest.suffix + ".tmp")
            try:
                with open(tmp, "wb") as fh:
                    for chunk in r.iter_content(8192):
                        fh.write(chunk)
                tmp.rename(dest)
            except Exception:
                tmp.unlink(missing_ok=True)
                raise
            check_disk(dest.parent)
            time.sleep(DELAY)
        except requests.HTTPError as e:
            print(f"    [warn] {filename}: {e}")


def download_favourites(session, username, output_dir: Path, dry_run=False):
    dest = output_dir / "favourites"
    dest.mkdir(exist_ok=True)
    print(f"\n=== Favourites for {username} ===")
    total = 0
    for thing in paginate(session, f"/users/{username}/likes"):
        if dry_run:
            total += dryrun_thing(session, thing, dest)
        else:
            download_thing(session, thing, dest)
    if dry_run:
        print(f"  Subtotal: {format_size(total)}")
    return total


def download_followed(session, username, output_dir: Path, dry_run=False):
    print(f"\n=== Followed creators for {username} ===")
    total = 0
    try:
        following = list(paginate(session, f"/users/{username}/following"))
    except requests.HTTPError as e:
        print(f"[error] Could not fetch following list: {e}")
        return 0
    n = len(following)
    for i, creator in enumerate(following, 1):
        cname = creator["name"]
        print(f"\n-- Creator: {cname} ({i}/{n}) --")
        creator_total = 0
        for thing in paginate(session, f"/users/{cname}/things"):
            if dry_run:
                size = dryrun_thing(session, thing, output_dir / "following")
                creator_total += size
                total += size
                print(f"  Running total: {format_size(total)}", end="\r")
            else:
                download_thing(session, thing, output_dir / "following")
        if dry_run:
            print(f"  Creator subtotal: {format_size(creator_total):>10}")
    if dry_run:
        print(f"\n  Followed total: {format_size(total)}")
    return total


def main():
    p = argparse.ArgumentParser(description="Download Thingiverse favourites and followed creators.")
    p.add_argument("username", help="Your Thingiverse username")
    p.add_argument("--token", default=os.environ.get("THINGIVERSE_TOKEN"),
                   help="API token (or set THINGIVERSE_TOKEN env var)")
    p.add_argument("--output", default="thingiverse_downloads",
                   help="Output directory (default: ./thingiverse_downloads)")
    p.add_argument("--dry-run", action="store_true",
                   help="Show download sizes without downloading anything")
    p.add_argument("--favourites-only", action="store_true")
    p.add_argument("--following-only", action="store_true")
    args = p.parse_args()

    if not args.token:
        sys.exit("Error: provide --token or set THINGIVERSE_TOKEN")

    session = make_session(args.token)

    out = Path(args.output)
    out.mkdir(exist_ok=True)

    do_fav = not args.following_only
    do_fol = not args.favourites_only

    if args.dry_run:
        print("=== Dry run — no files will be downloaded ===")

    total = 0
    if do_fav:
        total += download_favourites(session, args.username, out, args.dry_run)
    if do_fol:
        total += download_followed(session, args.username, out, args.dry_run)

    if args.dry_run:
        free = shutil.disk_usage(out).free
        print(f"\nTotal required : {format_size(total)}")
        print(f"Free on disk   : {format_size(free)}")
        if total > free:
            print("[warn] not enough free disk space!")
    else:
        print("\nDone.")


if __name__ == "__main__":
    main()
