class STATION_ROOT_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[ROOT EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[ROOT EXT] Booting…");
        this.loadRegistry();
        this.loadRouting();
        this.loadHotSwap();
        this.activate();
    }

    loadRegistry() {
        console.log("[ROOT EXT] Registry geladen:");
        for (const key in this.cfg.registry) {
            console.log(`- ${key}: ${this.cfg.registry[key]}`);
        }
    }

    loadRouting() {
        console.log("[ROOT EXT] Routing-Matrix:");
        this.cfg.routing.matrix.forEach(r => console.log("• " + r));
    }

    loadHotSwap() {
        if (this.cfg.hotswap.enabled) {
            console.log("[ROOT EXT] HotSwap aktiviert:");
            console.log("ROM:", this.cfg.hotswap.rom);
            console.log("TMP:", this.cfg.hotswap.tmp);
            console.log("PIPE:", this.cfg.hotswap.pipe);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[ROOT EXT] ROOT ist aktiv");
    }
}

fetch("root.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const root = new STATION_ROOT_EXT(cfg);
        root.boot();
        window.STATION_ROOT_EXT = root;
    });
