class ALL_PIPE12 {

    receivePipeline12(pipe){
        this.pipe = pipe;

        const out = document.getElementById("allPIPE12");
        if(!out) return;

        out.innerHTML = "<h2>Pipeline 12</h2>";

        pipe.forEach((stage, i)=>{
            out.innerHTML += `<h3>Stufe ${i+1}</h3>`;
            out.innerHTML += stage.map(row =>
                row.map(c =>
                    `<span class="navCell">${c.score}</span>`
                ).join("")
            ).join("<br>");
        });
    }
}

window.ALL_PIPE12 = new ALL_PIPE12();
