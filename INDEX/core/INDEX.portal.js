class INDEX_PORTAL {

    jump(karo){
        return karo.map((cell, i)=>{

            // 1) Portal-Typ bestimmen
            const portal =
                i % 4 === 0 ? "A" :
                i % 4 === 1 ? "B" :
                i % 4 === 2 ? "C" :
                "D";

            // 2) Hyperraum-Warp berechnen
            let newIndex = i;

            if(portal === "A") newIndex = i + 20;                     // Vorwärts-Sprung
            if(portal === "B") newIndex = i - 15;                     // Rückwärts-Sprung
            if(portal === "C") newIndex = (i * GAM.gamma()) % 380;    // γ∞-Warp
            if(portal === "D") newIndex = (i % 9) * 9 + (i % 9);      // 9×9-Raum-Sprung

            newIndex = Math.abs(newIndex % 380);

            // 3) Cube-Mind-Vektor erzeugen
            const cube = VECTOR_CUBEMIND.evaluate(cell.id);

            // 4) Hyperraum-Daten anhängen
            return {
                ...cell,
                portal,
                newIndex,

                hyperraum: {
                    warp: newIndex,
                    gamma: GAM.gamma(),
                    cubeMind: cube,
                    qi: cube.qi,
                    iqq: cube.iqq,
                    octa: cube.octa,
                    score: cube.score.total,
                    raum: cube.raum.type,
                    markt: cube.markt.boerse
                }
            };
        });
    }
}

window.INDEX_PORTAL = new INDEX_PORTAL();
