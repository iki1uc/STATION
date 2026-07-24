class ALL_HYPERRAUM {

    build(respo){
        const geo = ALL_GEOMETRY.build(respo);
        const portal = ALL_PORTAL.jump(geo);

        const m27 = portal;

        const m3x27 = [
            m27.map(c => ({...c, score: (c.score*1.2)%100})),
            m27.map(c => ({...c, score: (c.score*1.5)%100})),
            m27.map(c => ({...c, score: (c.score*1.8)%100}))
        ];

        const m81 = [];
        for(let r=0; r<9; r++){
            const row = [];
            for(let c=0; c<9; c++){
                const base = m27[(r*9+c)%27];
                row.push({
                    ...base,
                    score: (base.score + r*3 + c*2) % 100,
                    deg: (base.deg + r*15 + c*10) % 360
                });
            }
            m81.push(row);
        }

        return { m27, m3x27, m81 };
    }
}

window.ALL_HYPERRAUM = new ALL_HYPERRAUM();
