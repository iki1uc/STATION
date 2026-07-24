class STATION_RUNTIME {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[RUNTIME] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[RUNTIME] Booting…");

        this.showState();
        this.startLoop();
        this.activate();
    }

    showState() {
        console.log("[RUNTIME] State:");
        console.log(this.cfg.state);
    }

    startLoop() {
        if (!this.cfg.loop.enabled) return;

        console.log("[RUNTIME] Loop gestartet");

        setInterval(() => {
            this.tick();
        }, this.cfg.loop.interval);
    }

    tick() {
        console.log("[RUNTIME] Tick:", this.cfg.events.tick);
        this.signal();
        this.update();
        this.sync();
    }

    signal() {
        console.log("[RUNTIME] Signal:", this.cfg.events.signal);
    }

    update() {
        console.log("[RUNTIME] Update:", this.cfg.events.update);
    }

    sync() {
        console.log("[RUNTIME] Sync:", this.cfg.events.sync);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[RUNTIME] STATION RUNTIME aktiv");
    }
}

fetch("runtime.json")
    .then(r => r.json())
    .then(cfg => {
        const runtime = new STATION_RUNTIME(cfg);
        runtime.boot();
        window.STATION_RUNTIME = runtime;
    });
