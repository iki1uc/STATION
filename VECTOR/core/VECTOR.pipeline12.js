class VECTOR_PIPE12 {

    receivePipeline12(pipe){
        this.pipe = pipe;

        const out = document.getElementById("vectorPIPE12");
        if(!out) return;

        out.innerHTML = "<h2>Pipeline 12</h2>";

        pipe.forEach((stage, i)=>{
            out.innerHTML += `<h3>Stufe ${i+1}</h3>`;
            out.innerHTML += stage.map(row =>
                row.map(c =>
                    `<span class="small">${c.score}</span>`
                ).join("")
            ).join("<br>");
        });
    }
}

window.VECTOR_PIPE12 = new VECTOR_PIPE12();
