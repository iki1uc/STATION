class STATION_DEPLOY {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[DEPLOY] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[DEPLOY] Booting…");
        this.showVersion();
        this.showTargets();
        this.showPipeline();
        this.showIncludes();
        this.showIntegrity();
        this.activate();
    }

    showVersion() {
        console.log("[DEPLOY] Version:", this.cfg.version);
        console.log("[DEPLOY] Build:", this.cfg.build);
    }

    showTargets() {
        console.log("[DEPLOY] Deploy-Ziele:");
        for (const key in this.cfg.targets) {
            console.log(`- ${key}: ${this.cfg.targets[key]}`);
        }
    }

    showPipeline() {
        console.log("[DEPLOY] Pipeline:");
        for (const key in this.cfg.pipeline) {
            console.log(`- ${key}: ${this.cfg.pipeline[key]}`);
        }
    }

    showIncludes() {
        console.log("[DEPLOY] Enthaltene Module:");
        for (const key in this.cfg.includes) {
            console.log(`- ${key}: ${this.cfg.includes[key]}`);
        }
    }

    showIntegrity() {
        console.log("[DEPLOY] Integrität:");
        console.log(this.cfg.integrity);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[DEPLOY] STATION DEPLOY aktiv");
    }
}

fetch("deploy.json")
    .then(r => r.json())
    .then(cfg => {
        const deploy = new STATION_DEPLOY(cfg);
        deploy.boot();
        window.STATION_DEPLOY = deploy;
    });
