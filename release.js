class STATION_RELEASE {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[RELEASE] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[RELEASE] Booting…");
        this.showVersion();
        this.showIncludes();
        this.showIntegrity();
        this.activate();
    }

    showVersion() {
        console.log("[RELEASE] Version:", this.cfg.version);
        console.log("[RELEASE] Build:", this.cfg.build);
    }

    showIncludes() {
        console.log("[RELEASE] Module im Release:");
        for (const key in this.cfg.includes) {
            console.log(`- ${key}: ${this.cfg.includes[key]}`);
        }
    }

    showIntegrity() {
        console.log("[RELEASE] Integrität:");
        console.log(this.cfg.integrity);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[RELEASE] STATION RELEASE aktiv");
    }
}

fetch("release.json")
    .then(r => r.json())
    .then(cfg => {
        const release = new STATION_RELEASE(cfg);
        release.boot();
        window.STATION_RELEASE = release;
    });
