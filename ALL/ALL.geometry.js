class ALL_GEOMETRY {

    build(respo){
        return respo.map((name, i)=>{

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
                color,

                // 3D Position
                x: Math.sin(deg * Math.PI/180) * 50,
                y: Math.cos(deg * Math.PI/180) * 50,
                z: (score - 50),

                // Vektor
                vx: Math.sin(score),
                vy: Math.cos(score),
                vz: Math.sin(deg)
            };
        });
    }
}

window.ALL_GEOMETRY = new ALL_GEOMETRY();
