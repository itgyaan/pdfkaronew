{ config, lib, pkgs, ... }:

let
  cfg = config.services.pdfkaro;
in
{
  options.services.pdfkaro = {
    enable = lib.mkEnableOption "PDFKaro - Professional PDF Tools";

    package = lib.mkOption {
      type = lib.types.package;
      default = pkgs.pdfkaro;
      defaultText = lib.literalExpression "pkgs.pdfkaro";
      description = "The PDFKaro package to use.";
    };

    port = lib.mkOption {
      type = lib.types.port;
      default = 3000;
      description = "Port to listen on.";
    };
  };

  config = lib.mkIf cfg.enable {
    nixpkgs.overlays = [
      (final: prev: {
        pdfkaro = final.callPackage ./package.nix { };
      })
    ];

    systemd.user.services.pdfkaro = {
      Unit = {
        Description = "PDFKaro PDF Tools";
        After = [ "network.target" ];
      };

      Service = {
        ExecStart = "${cfg.package}/bin/pdfkaro";
        Restart = "on-failure";
        Environment = [
          "PDFKARO_PORT=${toString cfg.port}"
        ];
      };

      Install = {
        WantedBy = [ "default.target" ];
      };
    };
  };
}
