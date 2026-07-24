class VECTOR_ULTRA {

    receive9hoch9(matrix){
        // Speichern
        this.ultra = matrix;

        // Sichtbar machen
        const out = document.getElementById("vectorULTRA");
        if(!out) return;

        out.innerHTML =
            "<h2>ULTRA · 9×9</h2>" +
            matrix.map(row =>
                row.map(c =>
                    `<span class="small">${c.val}</span>`
                ).join("")
            ).join("<br>");
    }
}

window.VECTOR_ULTRA = new VECTOR_ULTRA();
