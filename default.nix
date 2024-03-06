with import (fetchTarball "https://github.com/nixos/nixpkgs/archive/nixos-20.09.tar.gz") {};

let
    nodejs = pkgs.nodejs-14_x;
    src = ./.;
in
stdenv.mkDerivation {
    name = "help-center-hive";
    buildInputs = [ nodejs ];
    buildPhase = ''
        npm install
        npm run build
    '';
    installPhase = ''
        cp -r . $out
    '';
    src = src;
}