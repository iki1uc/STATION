class STATION_LIVEBRIDGE {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[LIVEBRIDGE] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[LIVEBRIDGE] Booting…");

        this.showState();
        this.startBridgePulse();
        this.activate();
    }

    showState() {
        console.log("[LIVEBRIDGE] State:");
        console.log(this.cfg.state);
    }

    startBridgePulse() {
        if (!this.cfg.bridge.enabled) return;

        console.log("[LIVEBRIDGE] Bridge-Pulse gestartet");

        setInterval(() => {
            this.bridgeTick();
        }, this.cfg.bridge.interval);
    }

    bridgeTick() {
        console.log("[LIVEBRIDGE] Tick");

        this.syncLiveToRuntime();
        this.syncRuntimeToSystem();
        this.syncSystemToLive();

        this.flowInput();
        this.flowProcess();
        this.flowOutput();
    }

    syncLiveToRuntime() {
        console.log("[LIVEBRIDGE] Sync:", this.cfg.sync.live_to_runtime);
    }

    syncRuntimeToSystem() {
        console.log("[LIVEBRIDGE] Sync:", this.cfg.sync.runtime_to_system);
    }

    syncSystemToLive() {
        console.log("[LIVEBRIDGE] Sync:", this.cfg.sync.system_to_live);
    }

    flowInput() {
        console.log("[LIVEBRIDGE] Flow Input:", this.cfg.flow.input);
    }

    flowProcess() {
        console.log("[LIVEBRIDGE] Flow Process:", this.cfg.flow.process);
    }

    flowOutput() {
        console.log("[LIVEBRIDGE] Flow Output:", this.cfg.flow.output);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[LIVEBRIDGE] STATION LIVEBRIDGE aktiv");
    }
}

fetch("livebridge.json")
    .then(r => r.json())
    .then(cfg => {
        const livebridge = new STATION_LIVEBRIDGE(cfg);
        livebridge.boot();
        window.STATION_LIVEBRIDGE = livebridge;
    });
