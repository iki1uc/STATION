class STATION_STARTER {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[STARTER] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[STARTER] Booting…");

        this.loadBoot();
        this.loadModules();
        this.loadMatrix();

        this.activate();
    }

    loadBoot() {
        console.log("[STARTER] Boot-Reihenfolge:");
        for (const key in this.cfg.boot) {
            console.log(`- ${key}: ${this.cfg.boot[key]}`);
        }
    }

    loadModules() {
        console.log("[STARTER] Module:");
        for (const key in this.cfg.modules) {
            console.log(`- ${key}: ${this.cfg.modules[key]}`);
        }
    }

    loadMatrix() {
        console.log("[STARTER] Boot-Matrix:");
        this.cfg.matrix.flow.forEach(f => console.log("• " + f));
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[STARTER] STATION vollständig gestartet");
    }
}

fetch("starter.json")
    .then(r => r.json())
    .then(cfg => {
        const starter = new STATION_STARTER(cfg);
        starter.boot();
        window.STATION_STARTER = starter;
    });
