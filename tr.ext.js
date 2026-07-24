class STATION_TR_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[TR EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[TR EXT] Booting…");
        this.loadTransitions();
        this.loadLayers();
        this.activate();
    }

    loadTransitions() {
        console.log("[TR EXT] Transitionen geladen:");
        for (const key in this.cfg.transitions) {
            console.log(`- ${key}: ${this.cfg.transitions[key]}`);
        }
    }

    loadLayers() {
        console.log("[TR EXT] Layer geladen:");
        for (const key in this.cfg.layers) {
            console.log(`- ${key}: ${this.cfg.layers[key]}`);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[TR EXT] TR aktiv");
    }

    transition(name) {
        const trans = this.cfg.transitions[name];
        if (!trans) {
            console.warn("[TR EXT] Transition nicht gefunden:", name);
            return null;
        }

        console.log(`[TR EXT] Transition ausgeführt → ${name}`);
        return { name, transition: trans };
    }

    layer(name) {
        const layer = this.cfg.layers[name];
        if (!layer) {
            console.warn("[TR EXT] Layer nicht gefunden:", name);
            return null;
        }

        console.log(`[TR EXT] Layer geladen → ${name}`);
        return { name, layer };
    }
}

fetch("tr.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const tr = new STATION_TR_EXT(cfg);
        tr.boot();
        window.STATION_TR_EXT = tr;
    });
