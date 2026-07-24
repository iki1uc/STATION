class INDEX_RENDER {

    render(karo){
        const out = document.getElementById("index_karo");
        out.innerHTML = "";

        karo.forEach((cell, i)=>{
            const div = document.createElement("div");

            const color =
                cell.score.amp === "grün" ? "#0f0" :
                cell.score.amp === "gelb" ? "#cc0" :
                "#f00";

            div.className = "karo";
            div.style.background = color;
            div.style.left = (i % 20) * 30 + "px";
            div.style.top  = Math.floor(i / 20) * 30 + "px";
            div.innerText = cell.id;

            out.appendChild(div);
        });
    }
}

window.INDEX_RENDER = new INDEX_RENDER();
