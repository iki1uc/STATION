class ALL_PORTALFUSION {

    fuse(list){
        return list.map(c => ({
            ...c,
            fusionScore: (c.score + c.vx*10 + c.vy*10 + c.vz*10) % 100,
            fusionDeg: (c.deg + c.warp*5) % 360
        }));
    }

    render(list){
        const out = document.getElementById("portalfusion");
        out.innerHTML = "<h2>Portal-Fusion</h2>";

        out.innerHTML += list.map(c =>
            `<div class="fusionItem">
                ${c.name}<br>
                FusionScore: ${c.fusionScore}%<br>
                FusionDeg: ${c.fusionDeg}°
            </div>`
        ).join("");
    }
}

window.ALL_PORTALFUSION = new ALL_PORTALFUSION();
