class STATION_PUSH_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[PUSH EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[PUSH EXT] Booting…");
        this.loadEvents();
        this.activate();
    }

    loadEvents() {
        console.log("[PUSH EXT] Events geladen:");
        for (const key in this.cfg.events) {
            console.log(`- ${key}: ${this.cfg.events[key]}`);
        }
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[PUSH EXT] PUSH aktiv");
    }

    push(event, payload = "default") {
        const evt = this.cfg.events[event];
        if (!evt) {
            console.warn("[PUSH EXT] Event nicht gefunden:", event);
            return null;
        }

        console.log(`[PUSH EXT] PUSH → ${event} | Payload: ${payload}`);

        const target = this.cfg.targets[event] || this.cfg.routing.fallback;

        return {
            event,
            payload,
            target,
            endpoint: this.cfg.targets[target] || null
        };
    }
}

fetch("push.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const push = new STATION_PUSH_EXT(cfg);
        push.boot();
        window.STATION_PUSH_EXT = push;
    });
