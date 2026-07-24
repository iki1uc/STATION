class STATION_SEND_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[SEND EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[SEND EXT] Booting…");
        this.loadTargets();
        this.activate();
    }

    loadTargets() {
        console.log("[SEND EXT] Ziele geladen:");
        for (const key in this.cfg.targets) {
            console.log(`- ${key}: ${this.cfg.targets[key]}`);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[SEND EXT] SEND aktiv");
    }

    send(target, payload = "default") {
        if (!this.cfg.targets[target]) {
            console.warn("[SEND EXT] Ziel nicht gefunden:", target);
            return null;
        }

        console.log(`[SEND EXT] Sende → ${target} | Payload: ${payload}`);

        return {
            target,
            payload,
            endpoint: this.cfg.targets[target]
        };
    }
}

fetch("send.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const send = new STATION_SEND_EXT(cfg);
        send.boot();
        window.STATION_SEND_EXT = send;
    });
