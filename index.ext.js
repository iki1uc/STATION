class STATION_INDEX_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[INDEX EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[INDEX EXT] Booting…");
        this.render();
    }

    render() {
        this.state = "ACTIVE";
        const list = document.getElementById("moduleList");

        for (const key in this.cfg.modules) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${this.cfg.modules[key]}">${key.toUpperCase()}</a>`;
            list.appendChild(li);
        }

        console.log("[INDEX EXT] Module geladen");
    }
}

fetch("index.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const idx = new STATION_INDEX_EXT(cfg);
        idx.boot();
        window.STATION_INDEX_EXT = idx;
    });
