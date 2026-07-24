class STATION_RESPO_MOTOR {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[RESPO MOTOR] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[RESPO MOTOR] Booting…");
        this.activateRespo();
    }

    activateRespo() {
        this.state = "ACTIVE";
        console.log("[RESPO MOTOR] Aktiviert RESPO-Achsen");

        // RESPO #7 PIPE aktivieren
        this.activatePipe();

        // VECTOR aktivieren
        this.activateVector();

        // WHIRL aktivieren
        this.activateWhirl();

        // TMP / ROM / KI / DE / EN aktivieren
        this.activateChannels();
    }

    activatePipe() {
        console.log("[RESPO MOTOR] PIPE #7 aktiviert");
    }

    activateVector() {
        console.log("[RESPO MOTOR] VECTOR aktiviert");
    }

    activateWhirl() {
        console.log("[RESPO MOTOR] WHIRL aktiviert");
    }

    activateChannels() {
        console.log("[RESPO MOTOR] Channels aktiviert: TMP, ROM, KI, DE, EN");
    }
}

fetch("respo.hook.json")
    .then(r => r.json())
    .then(cfg => {
        const motor = new STATION_RESPO_MOTOR(cfg);
        motor.boot();
        window.STATION_RESPO_MOTOR = motor;
    });
