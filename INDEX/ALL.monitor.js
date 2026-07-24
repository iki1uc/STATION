class ALL_MONITOR {

    update(){
        const out = document.getElementById("all_monitor");

        out.innerHTML =
            "ALL Präsenz: " + ALL.presence + "\n" +
            "RESPO Anzahl: " + Object.keys(ALL.respo).length + "\n" +
            "Letzter Move: " + (ALL.lastMove || "—") + "\n" +
            "Letzter Raum: " + (ALL.lastRaum || "—") + "\n" +
            "Letzter Score: " + (ALL.lastScore || "—") + "\n" +
            "Letzter Markt: " + (ALL.lastMarkt || "—");
    }
}

window.ALL_MONITOR = new ALL_MONITOR();
