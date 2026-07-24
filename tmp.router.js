class STATION_TMP_ROUTER {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[TMP ROUTER] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[TMP ROUTER] Booting…");
        this.activate();
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[TMP ROUTER] TMP Routing aktiviert");
        console.log("[TMP ROUTER] Pfad:", this.cfg.tmp.path);
        console.log("[TMP ROUTER] Modus:", this.cfg.tmp.mode);

        this.openChannels();
        this.enableHotSwap();
    }

    openChannels() {
        console.log("[TMP ROUTER] Channels geöffnet:");
        console.log("KI:", this.cfg.channels.ki);
        console.log("DE:", this.cfg.channels.de);
        console.log("EN:", this.cfg.channels.en);
        console.log("GATE:", this.cfg.channels.gate);
        console.log("SEND:", this.cfg.channels.send);
    }

    enableHotSwap() {
        if (this.cfg.hotswap.enabled) {
            console.log("[TMP ROUTER] HotSwap aktiviert");
            console.log("ROM:", this.cfg.hotswap.rom);
            console.log("PIPE:", this.cfg.hotswap.pipe);
            console.log("VECTOR:", this.cfg.hotswap.vector);
            console.log("WHIRL:", this.cfg.hotswap.whirl);
        }
    }

    route(file) {
        const output = `${this.cfg.tmp.path}${file}.json`;
        console.log(`[TMP ROUTER] Routing TMP → ${output}`);
        return output;
    }

    swapToROM(file) {
        const output = `${this.cfg.hotswap.rom}${file}.json`;
        console.log(`[TMP ROUTER] HotSwap TMP→ROM → ${output}`);
        return output;
    }
}

fetch("tmp.router.json")
    .then(r => r.json())
    .then(cfg => {
        const tmp = new STATION_TMP_ROUTER(cfg);
        tmp.boot();
        window.STATION_TMP_ROUTER = tmp;
    });
