class VECTOR_ORBIT {

    receiveOrbit(data){
        this.orbit = data;

        const out = document.getElementById("vectorORBIT");
        if(!out) return;

        out.innerHTML =
            "<h2>CXR Orbit</h2>" +
            data.map(row =>
                row.map(c =>
                    `<span class="small">${c.orbitLevel}</span>`
                ).join("")
            ).join("<br>");
    }
}

window.VECTOR_ORBIT = new VECTOR_ORBIT();
