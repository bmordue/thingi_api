# thingiverse-dl

Download your Thingiverse favourites and/or all things from creators you follow.

## Requirements

- Python 3.8+
- `requests` library

```bash
pip install requests
```

### NixOS / home-manager

```nix
home.packages = with pkgs; [ (python3.withPackages (p: [ p.requests ])) ];
```

## Authentication

Generate an API token at [thingiverse.com/developers](https://www.thingiverse.com/developers) (create an app, then generate a token).

Set it as an environment variable:

```bash
export THINGIVERSE_TOKEN=your_token_here
```

Or pass it directly with `--token`.

## Usage

```
python thingiverse_dl.py <username> [options]
```

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `--token TOKEN` | `$THINGIVERSE_TOKEN` | Thingiverse API token |
| `--output DIR` | `./thingiverse_downloads` | Directory to save downloads |
| `--mode MODE` | `both` | What to download: `favourites`, `following`, or `both` |
| `--dry-run` | off | Show disk space required without downloading anything |

### Examples

```bash
# Download everything (favourites + followed creators)
python thingiverse_dl.py myusername

# Download favourites only
python thingiverse_dl.py myusername --mode favourites

# Download things from followed creators only
python thingiverse_dl.py myusername --mode following

# Check disk space before downloading
python thingiverse_dl.py myusername --dry-run

# Custom output directory
python thingiverse_dl.py myusername --output ~/things

# Pass token directly
python thingiverse_dl.py myusername --token abc123
```

## Output Structure

All downloads use a `creator/thing/` layout:

```
thingiverse_downloads/
  favourites/
    creator_name/
      12345_thing_name/
        metadata.json
        model.stl
        ...
  following/
    creator_name/
      67890_other_thing/
        metadata.json
        model.stl
        ...
```

## Behaviour

- **Resumable** — already-downloaded things are skipped; re-running is safe.
- **Atomic writes** — files are written to a `.tmp` file and renamed on completion. Interrupted downloads are cleaned up automatically and retried on the next run.
- **Rate limiting** — respects `Retry-After` headers on 429 responses. Transient server errors (5xx) are retried up to 5 times with exponential backoff.
- **Disk space** — warns if free disk space drops below 500 MB during a download. Use `--dry-run` to check space requirements before starting.
