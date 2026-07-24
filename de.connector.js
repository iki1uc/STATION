class STATION_DE_CONNECTOR {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[DE CONNECTOR] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[DE CONNECTOR] Booting…");
        this.activate();
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[DE CONNECTOR] DE Routing aktiviert");
        console.log("[DE CONNECTOR] Pfad:", this.cfg.path);

        this.openChannels();
    }

    openChannels() {
        console.log("[DE CONNECTOR] Channels geöffnet:");
        console.log("KI:", this.cfg.channels.ki);
        console.log("VECTOR:", this.cfg.channels.vector);
        console.log("WHIRL:", this.cfg.channels.whirl);
        console.log("TMP:", this.cfg.channels.tmp);
        console.log("ROM:", this.cfg.channels.rom);
    }

    route(input) {
        console.log(`[DE CONNECTOR] Routing: ${input}`);

        return {
            lang: this.cfg.lang,
            mode: this.cfg.routing.mode,
            output: `${this.cfg.path}${input}.json`
        };
    }
}

fetch("de.connector.json")
    .then(r => r.json())
    .then(cfg => {
        const de = new STATION_DE_CONNECTOR(cfg);
        de.boot();
        window.STATION_DE_CONNECTOR = de;
    });
