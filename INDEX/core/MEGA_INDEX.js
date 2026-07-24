class MEGA_INDEX {

    constructor(){
        this.karo = [];
        this.history = [];
    }

    // 380 Karos laden
    loadKaro(){
        this.karo = INDEX_RESPO.build();
        return this.karo;
    }

    // Move bestimmen
    computeMove(){
        const best = VECTOR_OPTIMIZER.optimize(this.karo);

        // Move speichern
        this.history.push({
            id: best.id,
            score: best.score.total,
            raum: best.raum.type,
            markt: best.markt.boerse,
            time: Date.now()
        });

        ALL.lastMove = best.id;
        ALL.lastScore = best.score.total;
        ALL.lastRaum = best.raum.type;
        ALL.lastMarkt = best.markt.boerse;

        ALL_MONITOR.update();

        return best;
    }

    // 12ALL‑Integration
    sendTo12ALL(best){
        if(window.ALL12){
            ALL12.receive(best);
        }
    }

    // 3D‑Move‑Animation
    animateMove(best){
        const out = document.getElementById("move_anim");
        if(!out) return;

        out.innerHTML = `
            <div class="cube">
                <div class="face front">${best.id}</div>
                <div class="face back">${best.id}</div>
                <div class="face left">${best.id}</div>
                <div class="face right">${best.id}</div>
                <div class="face top">${best.id}</div>
                <div class="face bottom">${best.id}</div>
            </div>
        `;
    }

    // Move‑History anzeigen
    renderHistory(){
        const out = document.getElementById("move_history");
        if(!out) return;

        out.innerHTML = this.history
            .slice(-20)
            .map(h => `${h.id} | Score ${h.score} | ${h.raum} | ${h.markt}`)
            .join("\n");
    }

    // MEGA INDEX starten
    start(){
        this.loadKaro();
        const best = this.computeMove();
        this.animateMove(best);
        this.renderHistory();
        this.sendTo12ALL(best);
        return best;
    }
}

window.MEGA_INDEX = new MEGA_INDEX();
