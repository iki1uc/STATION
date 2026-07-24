class STATION_WORLD_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[WORLD EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[WORLD EXT] Booting…");
        this.loadZones();
        this.loadLayers();
        this.activate();
    }

    loadZones() {
        console.log("[WORLD EXT] Zonen geladen:");
        for (const key in this.cfg.zones) {
            console.log(`- ${key}: ${this.cfg.zones[key]}`);
        }
    }

    loadLayers() {
        console.log("[WORLD EXT] Layer geladen:");
        for (const key in this.cfg.layers) {
            console.log(`- ${key}: ${this.cfg.layers[key]}`);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[WORLD EXT] WORLD aktiv");
    }

    zone(name) {
        const zone = this.cfg.zones[name];
        if (!zone) {
            console.warn("[WORLD EXT] Zone nicht gefunden:", name);
            return null;
        }

        console.log(`[WORLD EXT] Zone aktiviert → ${name}`);
        return { name, zone };
    }

    layer(name) {
        const layer = this.cfg.layers[name];
        if (!layer) {
            console.warn("[WORLD EXT] Layer nicht gefunden:", name);
            return null;
        }

        console.log(`[WORLD EXT] Layer geladen → ${name}`);
        return { name, layer };
    }
}

fetch("world.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const world = new STATION_WORLD_EXT(cfg);
        world.boot();
        window.STATION_WORLD_EXT = world;
    });
