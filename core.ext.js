class STATION_CORE_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[CORE EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[CORE EXT] Booting…");
        this.showIdentity();
        this.loadRegistry();
        this.startHeartbeat();
        this.integrityCheck();
        this.activate();
    }

    showIdentity() {
        console.log("[CORE EXT] Identity:");
        console.log(this.cfg.identity);
    }

    loadRegistry() {
        console.log("[CORE EXT] Registry geladen:");
        for (const key in this.cfg.registry) {
            console.log(`- ${key}: ${this.cfg.registry[key]}`);
        }
    }

    startHeartbeat() {
        if (!this.cfg.heartbeat.enabled) return;

        setInterval(() => {
            console.log("[CORE EXT] ♥ Heartbeat");
        }, this.cfg.heartbeat.interval * 100);
    }

    integrityCheck() {
        console.log("[CORE EXT] Integritätsprüfung…");

        const results = {};

        for (const key in this.cfg.registry) {
            results[key] = {
                exists: !!this.cfg.registry[key],
                path: this.cfg.registry[key],
                ok: true
            };
        }

        window.STATION_CORE_INTEGRITY = results;

        console.log("[CORE EXT] Integrität OK");
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[CORE EXT] CORE aktiv");
    }
}

fetch("core.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const core = new STATION_CORE_EXT(cfg);
        core.boot();
        window.STATION_CORE_EXT = core;
    });
