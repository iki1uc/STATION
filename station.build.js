class STATION_FULL_BUILD {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[FULL BUILD] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[FULL BUILD] Booting…");

        this.loadCore();
        this.loadRoot();
        this.loadLayers();
        this.loadModules();
        this.loadMatrix();

        this.activate();
    }

    loadCore() {
        console.log("[FULL BUILD] CORE:", this.cfg.core);
    }

    loadRoot() {
        console.log("[FULL BUILD] ROOT:", this.cfg.root);
    }

    loadLayers() {
        console.log("[FULL BUILD] LAYER:");
        for (const key in this.cfg.layers) {
            console.log(`- ${key}: ${this.cfg.layers[key]}`);
        }
    }

    loadModules() {
        console.log("[FULL BUILD] MODULE:");
        for (const key in this.cfg.modules) {
            console.log(`- ${key}: ${this.cfg.modules[key]}`);
        }
    }

    loadMatrix() {
        console.log("[FULL BUILD] MATRIX FLOW:");
        this.cfg.matrix.flow.forEach(f => console.log("• " + f));
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[FULL BUILD] STATION ist vollständig aktiv");
    }
}

fetch("station.build.json")
    .then(r => r.json())
    .then(cfg => {
        const build = new STATION_FULL_BUILD(cfg);
        build.boot();
        window.STATION_FULL_BUILD = build;
    });
