class ALL_VECTORCUBE {

    animate(list){
        const best = list.reduce((a,b)=> a.score > b.score ? a : b);

        const out = document.getElementById("vectorcube");
        out.innerHTML = `
            <div class="cube">
                <div class="face front">${best.name}<br>${best.score}%</div>
                <div class="face back">${best.deg}°</div>
                <div class="face left">vx=${best.vx.toFixed(2)}</div>
                <div class="face right">vy=${best.vy.toFixed(2)}</div>
                <div class="face top">vz=${best.vz.toFixed(2)}</div>
                <div class="face bottom">Portal ${best.portal}<br>Warp ${best.warp}</div>
            </div>
        `;
    }
}

window.ALL_VECTORCUBE = new ALL_VECTORCUBE();
