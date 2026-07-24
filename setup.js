class STATION_SETUP {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[SETUP] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[SETUP] Booting…");

        this.phase("init");
        this.phase("load_core");
        this.phase("load_root");
        this.phase("load_layers");
        this.phase("load_modules");
        this.phase("verify");
        this.phase("activate");
    }

    phase(name) {
        const phaseName = this.cfg.phases[name];
        console.log(`[SETUP] Phase → ${name}: ${phaseName}`);

        if (name === "load_layers") this.loadLayers();
        if (name === "load_modules") this.loadModules();
        if (name === "verify") this.verify();
        if (name === "activate") this.activate();
    }

    loadLayers() {
        console.log("[SETUP] Lade Layer:");
        for (const key in this.cfg.layers) {
            console.log(`- ${key}: ${this.cfg.layers[key]}`);
        }
    }

    loadModules() {
        console.log("[SETUP] Lade Module:");
        for (const key in this.cfg.modules) {
            console.log(`- ${key}: ${this.cfg.modules[key]}`);
        }
    }

    verify() {
        console.log("[SETUP] Prüfe System:");
        console.log(this.cfg.checks);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[SETUP] STATION ist jetzt aktiv");
    }
}

fetch("setup.json")
    .then(r => r.json())
    .then(cfg => {
        const setup = new STATION_SETUP(cfg);
        setup.boot();
        window.STATION_SETUP = setup;
    });
