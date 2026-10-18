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

    openFirewall = lib.mkOption {
      type = lib.types.bool;
      default = false;
      description = "Whether to open the firewall port.";
    };
  };

  config = lib.mkIf cfg.enable {
    nixpkgs.overlays = [
      (final: prev: {
        pdfkaro = final.callPackage ./package.nix { };
      })
    ];

    systemd.services.pdfkaro = {
      description = "PDFKaro PDF Tools";
      after = [ "network.target" ];
      wantedBy = [ "multi-user.target" ];

      environment = {
        PDFKARO_PORT = toString cfg.port;
      };

      serviceConfig = {
        ExecStart = "${cfg.package}/bin/pdfkaro";
        Restart = "on-failure";
        DynamicUser = true;
        RuntimeDirectory = "pdfkaro";
        StateDirectory = "pdfkaro";

        # Hardening
        NoNewPrivileges = true;
        ProtectSystem = "strict";
        ProtectHome = true;
        PrivateTmp = true;
        PrivateDevices = true;
        ProtectKernelTunables = true;
        ProtectKernelModules = true;
        ProtectControlGroups = true;
        RestrictSUIDSGID = true;
        MemoryDenyWriteExecute = false;
      };
    };

    networking.firewall.allowedTCPPorts = lib.mkIf cfg.openFirewall [ cfg.port ];
  };
}
