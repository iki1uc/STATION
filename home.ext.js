class STATION_HOME_EXT {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[HOME EXT] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[HOME EXT] Booting…");
        this.render();
    }

    render() {
        this.state = "ACTIVE";
        const container = document.getElementById("homeSections");

        for (const section in this.cfg.sections) {
            const box = document.createElement("div");
            box.className = "box";

            const title = document.createElement("h3");
            title.innerText = section.toUpperCase();
            box.appendChild(title);

            const list = document.createElement("ul");

            for (const key in this.cfg.sections[section]) {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${this.cfg.sections[section][key]}">${key.toUpperCase()}</a>`;
                list.appendChild(li);
            }

            box.appendChild(list);
            container.appendChild(box);
        }

        console.log("[HOME EXT] HOME geladen");
    }
}

fetch("home.ext.json")
    .then(r => r.json())
    .then(cfg => {
        const home = new STATION_HOME_EXT(cfg);
        home.boot();
        window.STATION_HOME_EXT = home;
    });
