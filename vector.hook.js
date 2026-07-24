class STATION_VECTOR_HOOK {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[VECTOR HOOK] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[VECTOR HOOK] Booting…");
        this.loadPipe();
        this.activateWhirl();
        this.activateChannels();
    }

    loadPipe() {
        console.log("[VECTOR HOOK] Lade VECTOR.pipe.js");
        console.log("[VECTOR HOOK] Achsen:", this.cfg.vector.axis.join(", "));
    }

    activateWhirl() {
        if (this.cfg.vector.mode === "whirl") {
            console.log("[VECTOR HOOK] WHIRL-Modus aktiviert");
        }
    }

    activateChannels() {
        console.log("[VECTOR HOOK] Channels aktiviert:");
        console.log("KI:", this.cfg.channels.ki);
        console.log("DE:", this.cfg.channels.de);
        console.log("EN:", this.cfg.channels.en);
        console.log("TMP:", this.cfg.channels.tmp);
        console.log("ROM:", this.cfg.channels.rom);
    }

    move(axis, value) {
        console.log(`[VECTOR HOOK] Bewegung: ${axis} → ${value}`);
        return { axis, value };
    }
}

fetch("vector.hook.json")
    .then(r => r.json())
    .then(cfg => {
        const hook = new STATION_VECTOR_HOOK(cfg);
        hook.boot();
        window.STATION_VECTOR_HOOK = hook;
    });
