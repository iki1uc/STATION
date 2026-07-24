class STATION_WHIRL_MOTOR {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[WHIRL MOTOR] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[WHIRL MOTOR] Booting…");
        this.activate();
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[WHIRL MOTOR] WHIRL aktiviert");
        console.log("[WHIRL MOTOR] Modus:", this.cfg.whirl.default);
        console.log("[WHIRL MOTOR] Achsen:", this.cfg.whirl.axis.join(", "));
        console.log("[WHIRL MOTOR] Geschwindigkeit:", this.cfg.whirl.speed);

        this.openChannels();
    }

    openChannels() {
        console.log("[WHIRL MOTOR] Channels geöffnet:");
        console.log("VECTOR:", this.cfg.channels.vector);
        console.log("KI:", this.cfg.channels.ki);
        console.log("DE:", this.cfg.channels.de);
        console.log("EN:", this.cfg.channels.en);
        console.log("TMP:", this.cfg.channels.tmp);
        console.log("ROM:", this.cfg.channels.rom);
    }

    whirl(mode = this.cfg.whirl.default) {
        console.log(`[WHIRL MOTOR] Bewegung gestartet: ${mode}`);

        return {
            mode,
            speed: this.cfg.whirl.speed,
            axis: this.cfg.whirl.axis
        };
    }
}

fetch("whirl.motor.json")
    .then(r => r.json())
    .then(cfg => {
        const whirl = new STATION_WHIRL_MOTOR(cfg);
        whirl.boot();
        window.STATION_WHIRL_MOTOR = whirl;
    });
