class MEGA_INDEX_ZOOM {

    constructor(){
        this.grid = [];
    }

    buildZoom(karo){
        this.grid = [];

        for(let i=0; i<33; i++){
            const slice = karo.slice(i*4, i*4+4);

            this.grid.push({
                id: "ZOOM_" + i,
                cells: slice,
                gamma: GAM.gamma()
            });
        }

        return this.grid;
    }

    renderZoom(){
        const out = document.getElementById("zoom_grid");
        if(!out) return;

        out.innerHTML = "";

        this.grid.forEach((z, i)=>{
            const div = document.createElement("div");
            div.className = "zoomCell";
            div.innerText = z.id + " γ∞=" + z.gamma;
            div.style.top = (Math.floor(i/11)*50) + "px";
            div.style.left = ((i%11)*120) + "px";
            out.appendChild(div);
        });
    }
}

window.MEGA_INDEX_ZOOM = new MEGA_INDEX_ZOOM();
