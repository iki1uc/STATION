class STATION_LIVEBRIDGE {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[LIVEBRIDGE] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[LIVEBRIDGE] Booting…");
        this.activate();
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[LIVEBRIDGE] Live-Sync aktiviert");
        console.log("[LIVEBRIDGE] Modus:", this.cfg.bridge.mode);
        console.log("[LIVEBRIDGE] Interval:", this.cfg.bridge.interval);

        this.syncModules();
        this.startLoop();
    }

    syncModules() {
        console.log("[LIVEBRIDGE] Module synchronisiert:");
        for (const key in this.cfg.modules) {
            console.log(`- ${key}: ${this.cfg.modules[key]}`);
        }
    }

    startLoop() {
        setInterval(() => {
            console.log("[LIVEBRIDGE] Sync Tick");
        }, this.cfg.bridge.interval * 100);
    }
}

fetch("livebridge.json")
    .then(r => r.json())
    .then(cfg => {
        const lb = new STATION_LIVEBRIDGE(cfg);
        lb.boot();
        window.STATION_LIVEBRIDGE = lb;
    });
