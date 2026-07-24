class STATION_LIVE {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[LIVE] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[LIVE] Booting…");

        this.showState();
        this.startPulse();
        this.activate();
    }

    showState() {
        console.log("[LIVE] State:");
        console.log(this.cfg.state);
    }

    startPulse() {
        if (!this.cfg.pulse.enabled) return;

        console.log("[LIVE] Pulse gestartet");

        setInterval(() => {
            this.liveTick();
        }, this.cfg.pulse.interval);
    }

    liveTick() {
        console.log("[LIVE] Tick:", this.cfg.events.live_tick);
        this.liveSync();
        this.liveUpdate();
        this.liveStream();
    }

    liveSync() {
        console.log("[LIVE] Sync:", this.cfg.events.live_sync);
    }

    liveUpdate() {
        console.log("[LIVE] Update:", this.cfg.events.live_update);
    }

    liveStream() {
        console.log("[LIVE] Stream:", this.cfg.events.live_stream);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[LIVE] STATION LIVE aktiv");
    }
}

fetch("live.json")
    .then(r => r.json())
    .then(cfg => {
        const live = new STATION_LIVE(cfg);
        live.boot();
        window.STATION_LIVE = live;
    });
