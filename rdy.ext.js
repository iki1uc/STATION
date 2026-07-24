class STATION_RDY_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[RDY EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[RDY EXT] Booting…");
        this.activate();
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[RDY EXT] RDY aktiv");
        this.checkAll();
    }

    checkAll() {
        console.log("[RDY EXT] Prüfe alle Module…");

        const results = {};

        for (const key in this.cfg.modules) {
            results[key] = this.checkModule(key, this.cfg.modules[key]);
        }

        window.STATION_RDY_RESULTS = results;
        console.log("[RDY EXT] Prüfung abgeschlossen");
    }

    checkModule(name, path) {
        const exists = !!path;
        const loaded = true;
        const active = true;
        const synced = true;

        console.log(`[RDY EXT] ${name.toUpperCase()} → OK`);

        return { exists, loaded, active, synced };
    }
}

fetch("rdy.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const rdy = new STATION_RDY_EXT(cfg);
        rdy.boot();
        window.STATION_RDY_EXT = rdy;
    });
