class STATION_UNI_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[UNI EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[UNI EXT] Booting…");
        this.loadLevels();
        this.loadMeta();
        this.activate();
    }

    loadLevels() {
        console.log("[UNI EXT] Ebenen geladen:");
        for (const key in this.cfg.levels) {
            console.log(`- ${key}: ${this.cfg.levels[key]}`);
        }
    }

    loadMeta() {
        console.log("[UNI EXT] Meta-Layer geladen:");
        for (const key in this.cfg.meta) {
            console.log(`- ${key}: ${this.cfg.meta[key]}`);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[UNI EXT] UNI aktiv");
    }

    level(name) {
        const lvl = this.cfg.levels[name];
        if (!lvl) {
            console.warn("[UNI EXT] Ebene nicht gefunden:", name);
            return null;
        }

        console.log(`[UNI EXT] Ebene aktiviert → ${name}`);
        return { name, level: lvl };
    }

    meta(name) {
        const layer = this.cfg.meta[name];
        if (!layer) {
            console.warn("[UNI EXT] Meta-Layer nicht gefunden:", name);
            return null;
        }

        console.log(`[UNI EXT] Meta-Layer geladen → ${name}`);
        return { name, layer };
    }
}

fetch("uni.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const uni = new STATION_UNI_EXT(cfg);
        uni.boot();
        window.STATION_UNI_EXT = uni;
    });
