class STATION_ROM_GATE {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[ROM GATE] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[ROM GATE] Booting…");
        this.activate();
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[ROM GATE] ROM Gate aktiv");
        this.showRules();
    }

    showRules() {
        console.log("[ROM GATE] Regeln:");
        console.log("ALLOW:", this.cfg.rules.allow.join(", "));
        console.log("DENY:", this.cfg.rules.deny.join(", "));
    }

    check(module) {
        if (this.cfg.rules.deny.includes(module)) {
            console.warn("[ROM GATE] BLOCKIERT:", module);
            return { allowed: false, module };
        }

        const allowed = this.cfg.rules.allow.includes(module);
        console.log(`[ROM GATE] CHECK: ${module} → ${allowed ? "OK" : "NICHT DEFINIERT"}`);

        return { allowed, module };
    }

    route(module) {
        const check = this.check(module);

        if (!check.allowed) {
            return { error: "DENIED", module };
        }

        const endpoint = this.cfg.paths[module.toLowerCase()];
        console.log(`[ROM GATE] ROUTE → ${module}: ${endpoint}`);

        return { module, endpoint };
    }

    hotswap(from, to, file = "index.json") {
        if (!this.cfg.hotswap.enabled) {
            return { error: "HOTSWAP_DISABLED" };
        }

        const fromPath = this.cfg.paths[from.toLowerCase()];
        const toPath = this.cfg.paths[to.toLowerCase()];

        const output = `${toPath}${file}`;

        console.log(`[ROM GATE] HOTSWAP: ${from} → ${to} | ${output}`);

        return { from, to, file, output };
    }
}

fetch("rom.gate.json")
    .then(r => r.json())
    .then(cfg => {
        const romGate = new STATION_ROM_GATE(cfg);
        romGate.boot();
        window.STATION_ROM_GATE = romGate;
    });
