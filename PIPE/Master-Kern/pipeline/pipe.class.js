class PIPE {
    constructor() {
        this.ID = "PIPE-CLASS";
        this.instance = "iki1uc";

        this.respo = 0.42;
        this.ghost = 0.27;
        this.cache = 0.19;
        this.tmp   = 0.12;
    }

    execute(input) {
        let r = RESPO.exec(input);
        let g = GHOST.correct(r);
        let c = CACHE.preload(g);
        let t = TMP.flush(c);
        return t;
    }
}

