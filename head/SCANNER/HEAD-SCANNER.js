window.HEAD_SCANNER = {

    ROOT: "iki1uc",
    DIM: "D1",
    SYSTEM: "6E",
    MODE: "REAL-LIVE",

    scan_identity() {
        return {
            NAME: "HEAD",
            DIM: "D1",
            ROLE: "Steuerung / Logik / Kontrolle / Ausrichtung",
            STABILITAET: "12e",
            PARITY: "D4 ↔ D5",
            TMP_LAEUFER: "SYQ",
            STATUS: "STABIL",
            READY: "100%"
        };
    },

    scan_moves() {
        return {
            C6: "aktiv",
            QI: "aktiv",
            IQQ: "aktiv",
            GES: "aktiv",
            DES: "aktiv",
            MAX_MOVE: "aktiv"
        };
    },

    run() {
        return {
            identity: this.scan_identity(),
            moves: this.scan_moves()
        };
    }
};
