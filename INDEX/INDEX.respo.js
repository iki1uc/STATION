class INDEX_RESPO {

    constructor(){
        this.karo = [];
    }

    build(){
        this.karo = [];

        for(let i=0; i<380; i++){
            const name = "KARO_" + i;

            this.karo.push({
                id: name,
                gamma: GAM.gamma(),
                score: VECTOR_SCORE.score(name),
                raum: VECTOR_RAUM.raum(name),
                markt: VECTOR_MARKT.markt(name)
            });
        }

        return this.karo;
    }
}

window.INDEX_RESPO = new INDEX_RESPO();
