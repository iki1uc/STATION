class VECTOR81 {

    build(){
        const out = [];
        for(let r=0; r<9; r++){
            const row = [];
            for(let c=0; c<9; c++){
                row.push({
                    pos: r*9+c,
                    qi: VECTOR.qi(r,c),
                    iqq: VECTOR.iqq(r,c),
                    octa: VECTOR.octa(r,c),
                    gamma: GAM.gamma()
                });
            }
            out.push(row);
        }
        return out;
    }
}

window.VECTOR81 = new VECTOR81();
