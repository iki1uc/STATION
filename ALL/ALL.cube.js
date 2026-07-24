class ALL_CUBE {

    render(list){
        const out = document.getElementById("cube3d");
        out.innerHTML = "";

        const best = list.reduce((a,b)=> a.score > b.score ? a : b);

        out.innerHTML = `
            <div class="cube">
                <div class="face front">${best.name}<br>${best.score}%</div>
                <div class="face back">${best.deg}°</div>
                <div class="face left">${best.portal}</div>
                <div class="face right">${best.warp}</div>
                <div class="face top">${best.x.toFixed(1)},${best.y.toFixed(1)}</div>
                <div class="face bottom">${best.z.toFixed(1)}</div>
            </div>
        `;
    }
}

window.ALL_CUBE = new ALL_CUBE();
