class TMP_HDF_RESOLVER {

    constructor() {
        this.state = "INIT";
        console.log("[HDF-RESPO] Resolver aktiv");
    }

    async resolve(file, content) {

        // Auftrag extrahieren
        const match = content.match(/#([A-Z0-9]+)/);
        if (!match) {
            console.log(`[HDF] Kein Auftrag in ${file}`);
            return;
        }

        const target = match[1];
        const newName = `${target}.hdf`;

        console.log(`[HDF] Auftrag erkannt: ${target}`);
        console.log(`[HDF] Neuer Name: ${newName}`);
        console.log(`[HDF] Umgebung: /SLIDE/${target}/`);

        return {
            original: file,
            newName,
            targetDir: `/SLIDE/${target}/`
        };
    }
}

window.TMP_HDF_RESOLVER = new TMP_HDF_RESOLVER();
