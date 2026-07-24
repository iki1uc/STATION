class STATION_INSTALLER {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[INSTALLER] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[INSTALLER] Booting…");
        this.showVersion();
        this.showSteps();
        this.showIncludes();
        this.showChecks();
        this.activate();
    }

    showVersion() {
        console.log("[INSTALLER] Version:", this.cfg.version);
        console.log("[INSTALLER] Build:", this.cfg.build);
    }

    showSteps() {
        console.log("[INSTALLER] Setup-Schritte:");
        for (const key in this.cfg.steps) {
            console.log(`- ${key}: ${this.cfg.steps[key]}`);
        }
    }

    showIncludes() {
        console.log("[INSTALLER] Enthaltene Module:");
        for (const key in this.cfg.includes) {
            console.log(`- ${key}: ${this.cfg.includes[key]}`);
        }
    }

    showChecks() {
        console.log("[INSTALLER] System-Checks:");
        console.log(this.cfg.checks);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[INSTALLER] STATION INSTALLER aktiv");
    }
}

fetch("installer.json")
    .then(r => r.json())
    .then(cfg => {
        const installer = new STATION_INSTALLER(cfg);
        installer.boot();
        window.STATION_INSTALLER = installer;
    });
