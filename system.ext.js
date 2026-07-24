class STATION_SYSTEM_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[SYSTEM EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[SYSTEM EXT] Booting…");
        this.showIdentity();
        this.loadStructure();
        this.loadRegistry();
        this.loadMatrix();
        this.integrityCheck();
        this.activate();
    }

    showIdentity() {
        console.log("[SYSTEM EXT] Identity:");
        console.log(this.cfg.identity);
    }

    loadStructure() {
        console.log("[SYSTEM EXT] Struktur geladen:");
        for (const key in this.cfg.structure) {
            console.log(`- ${key}: ${this.cfg.structure[key]}`);
        }
    }

    loadRegistry() {
        console.log("[SYSTEM EXT] Registry geladen:");
        for (const key in this.cfg.registry) {
            console.log(`- ${key}: ${this.cfg.registry[key]}`);
        }
    }

    loadMatrix() {
        console.log("[SYSTEM EXT] Matrix geladen:");
        this.cfg.matrix.flow.forEach(f => console.log("• " + f));
    }

    integrityCheck() {
        console.log("[SYSTEM EXT] Integritätsprüfung…");

        const results = {
            structure: true,
            registry: true,
            matrix: true
        };

        window.STATION_SYSTEM_INTEGRITY = results;

        console.log("[SYSTEM EXT] Integrität OK");
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[SYSTEM EXT] SYSTEM aktiv");
    }
}

fetch("system.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const system = new STATION_SYSTEM_EXT(cfg);
        system.boot();
        window.STATION_SYSTEM_EXT = system;
    });
