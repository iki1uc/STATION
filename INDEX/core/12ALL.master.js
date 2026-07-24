class ALL12 {

    constructor(){
        this.last = null;
        this.room9x9 = [];
    }

    receive(best){
        this.last = best;
        this.build9x9(best);
        this.render();
    }

    build9x9(best){
        this.room9x9 = [];

        for(let r=0; r<9; r++){
            const row = [];
            for(let c=0; c<9; c++){
                row.push({
                    pos: r*9+c,
                    qi: VECTOR.qi(r,c),
                    iqq: VECTOR.iqq(r,c),
                    gamma: GAM.gamma(),
                    move: best.id
                });
            }
            this.room9x9.push(row);
        }
    }

    render(){
        const out = document.getElementById("room9x9");
        if(!out) return;

        out.innerHTML = "";

        this.room9x9.forEach((row, r)=>{
            row.forEach((cell, c)=>{
                const div = document.createElement("div");
                div.className = "roomCell";
                div.style.left = (c*30)+"px";
                div.style.top  = (r*30)+"px";
                div.innerText = cell.iqq;
                out.appendChild(div);
            });
        });
    }
}

window.ALL12 = new ALL12();
