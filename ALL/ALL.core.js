class ALL {

    // 27er-Bildung (korrekt)
    build27(list){
        return list.map((name, i)=>{
            const score = ((i + name.length) * 7) % 100;
            const deg   = ((i + name.length) * 13) % 360;

            const color =
                score >= 70 ? "green" :
                score >= 40 ? "yellow" :
                "red";

            return {
                id: i,
                name,
                score,
                deg,
                color
            };
        });
    }

    // 3×27-Bildung (korrekt, jede Stufe anders)
    build3x27(list){
        const base = this.build27(list);

        return [
            base.map(c => ({...c, score: (c.score * 1.2) % 100, deg: (c.deg + 10) % 360})),
            base.map(c => ({...c, score: (c.score * 1.5) % 100, deg: (c.deg + 20) % 360})),
            base.map(c => ({...c, score: (c.score * 1.8) % 100, deg: (c.deg + 30) % 360}))
        ];
    }

    // 81er Cube-Mind (korrekt 9×9)
    build81(list){
        const out = [];
        for(let r=0; r<9; r++){
            const row = [];
            for(let c=0; c<9; c++){
                const idx = (r*9 + c) % list.length;
                const base = list[idx];

                row.push({
                    r, c,
                    name: base.name,
                    score: (base.score + r*3 + c*2) % 100,
                    deg: (base.deg + r*15 + c*10) % 360,
                    color: base.color
                });
            }
            out.push(row);
        }
        return out;
    }

    // MASTER-SCHALTUNG
    computeMaster(list){
        const m27   = this.build27(list);
        const m3x27 = this.build3x27(list);
        const m81   = this.build81(m27);

        return { m27, m3x27, m81 };
    }
}

window.ALL = new ALL();
