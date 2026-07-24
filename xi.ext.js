class STATION_XI_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[XI EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[XI EXT] Booting…");
        this.loadLogic();
        this.loadLinks();
        this.activate();
    }

    loadLogic() {
        console.log("[XI EXT] Logik geladen:");
        for (const key in this.cfg.logic) {
            console.log(`- ${key}: ${this.cfg.logic[key]}`);
        }
    }

    loadLinks() {
        console.log("[XI EXT] Links geladen:");
        for (const key in this.cfg.links) {
            console.log(`- ${key}: ${this.cfg.links[key]}`);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[XI EXT] XI aktiv");
    }

    pattern(input) {
        console.log("[XI EXT] Pattern erkannt:", input);
        return { type: "pattern", input };
    }

    context(input) {
        console.log("[XI EXT] Kontext verarbeitet:", input);
        return { type: "context", input };
    }

    meta(input) {
        console.log("[XI EXT] Meta-Signal:", input);
        return { type: "meta", input };
    }

    shift(input) {
        console.log("[XI EXT] Logik-Shift:", input);
        return { type: "shift", input };
    }
}

fetch("xi.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const xi = new STATION_XI_EXT(cfg);
        xi.boot();
        window.STATION_XI_EXT = xi;
    });
