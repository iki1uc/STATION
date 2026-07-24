class STATION_BOOTLOADER {

    constructor(cfg) {
        this.cfg = cfg;
        this.state = "INIT";
        console.log("[BOOTLOADER] Initialisiert:", cfg.id);
    }

    boot() {
        this.state = "BOOT";
        console.log("[BOOTLOADER] Booting…");

        this.phase("preinit");
        this.phase("kernel");
        this.phase("system");
        this.phase("modules");
        this.phase("handoff");

        this.activate();
    }

    phase(name) {
        const phaseName = this.cfg.phases[name];
        console.log(`[BOOTLOADER] Phase → ${name}: ${phaseName}`);

        if (name === "kernel") this.loadKernel();
        if (name === "system") this.loadSystem();
        if (name === "modules") this.loadModules();
        if (name === "handoff") this.handoff();
    }

    loadKernel() {
        console.log("[BOOTLOADER] Kernel laden:");
        for (const key in this.cfg.kernel) {
            console.log(`- ${key}: ${this.cfg.kernel[key]}`);
        }
    }

    loadSystem() {
        console.log("[BOOTLOADER] System laden:");
        for (const key in this.cfg.system) {
            console.log(`- ${key}: ${this.cfg.system[key]}`);
        }
    }

    loadModules() {
        console.log("[BOOTLOADER] Module laden:");
        for (const key in this.cfg.modules) {
            console.log(`- ${key}: ${this.cfg.modules[key]}`);
        }
    }

    handoff() {
        console.log("[BOOTLOADER] Übergabe an STARTER:");
        console.log(this.cfg.handoff);
    }

    activate() {
        this.state = "ACTIVE";
        console.log("[BOOTLOADER] STATION BOOTLOADER aktiv");
    }
}

fetch("bootloader.json")
    .then(r => r.json())
    .then(cfg => {
        const bootloader = new STATION_BOOTLOADER(cfg);
        bootloader.boot();
        window.STATION_BOOTLOADER = bootloader;
    });
