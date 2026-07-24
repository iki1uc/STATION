class STATION_API_CORE {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[API CORE] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[API CORE] Booting…");
        this.loadEndpoints();
        this.activate();
    }

    loadEndpoints() {
        console.log("[API CORE] Endpoints geladen:");
        for (const key in this.cfg.endpoints) {
            console.log(`- ${key}: ${this.cfg.endpoints[key]}`);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[API CORE] API aktiv");
    }

    call(module, action = "load") {
        if (!this.cfg.endpoints[module]) {
            console.warn("[API CORE] Modul nicht gefunden:", module);
            return null;
        }

        console.log(`[API CORE] API Call → ${module} (${action})`);

        return {
            module,
            action,
            endpoint: this.cfg.endpoints[module]
        };
    }
}

fetch("api.core.json")
    .then(r => r.json())
    .then(cfg => {
        const api = new STATION_API_CORE(cfg);
        api.boot();
        window.STATION_API_CORE = api;
    });
