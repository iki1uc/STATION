class ALL_NAVIGATOR {

    render(hyper){
        const out = document.getElementById("navigator");
        out.innerHTML = "";

        out.innerHTML += "<h2>Hyperraum-Navigator</h2>";

        out.innerHTML += "<h3>27er Basis</h3>";
        out.innerHTML += hyper.m27.map(c =>
            `<div class="navItem">
                ${c.name} → ${c.score}% → ${c.deg}° → Portal ${c.portal} → Warp ${c.warp}
            </div>`
        ).join("");

        out.innerHTML += "<h3>3×27 Stufen</h3>";
        out.innerHTML += hyper.m3x27.map((row,i)=>
            `<h4>Stufe ${i+1}</h4>` +
            row.map(c =>
                `<div class="navItem">
                    ${c.name} → ${c.score}% → ${c.deg}°
                </div>`
            ).join("")
        ).join("");

        out.innerHTML += "<h3>81er Cube-Mind</h3>";
        out.innerHTML += hyper.m81.map(row =>
            row.map(c =>
                `<span class="navCell">${c.score}%</span>`
            ).join("")
        ).join("<br>");
    }
}

window.ALL_NAVIGATOR = new ALL_NAVIGATOR();
