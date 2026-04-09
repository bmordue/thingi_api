{ pkgs ? import <nixpkgs> {} }:

let
  envFile = builtins.readFile ../thingi_details.env;
  m = builtins.match "APP_TOKEN=(.*)" envFile;
  token = if m == null then "" else m[1];
in
pkgs.mkShell {
  buildInputs = with pkgs; [
    python3
    python3Packages.requests
    python3Packages.urllib3
  ];

  shellHook = ''
    export THINGIVERSE_TOKEN=1f06ff328b5d31cfcf52e396fb80921e
  '';
}
