class ALL_ORBIT {

    receiveOrbit(data){
        this.orbit = data;

        const out = document.getElementById("allORBIT");
        if(!out) return;

        out.innerHTML =
            "<h2>CXR Orbit</h2>" +
            data.map(row =>
                row.map(c =>
                    `<span class="navCell">${c.orbitLevel}</span>`
                ).join("")
            ).join("<br>");
    }
}

window.ALL_ORBIT = new ALL_ORBIT();
