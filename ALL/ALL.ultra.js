class ALL_ULTRA {

    receive9hoch9(matrix){
        this.ultra = matrix;

        const out = document.getElementById("allULTRA");
        if(!out) return;

        out.innerHTML =
            "<h2>ULTRA · 9×9</h2>" +
            matrix.map(row =>
                row.map(c =>
                    `<span class="navCell">${c.val}</span>`
                ).join("")
            ).join("<br>");
    }
}

window.ALL_ULTRA = new ALL_ULTRA();
