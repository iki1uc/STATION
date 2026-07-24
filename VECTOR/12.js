window.VECTOR_BRIDGE = {
    send(data){
        if(window.iki1uc){
            iki1uc.receive(data);
        } else {
            console.warn("iki1uc not loaded, VECTOR fallback active.");
        }
    }
};

window.VECTOR_ASCII = {
    frame: 0,

    tick(){
        this.frame++;
        const f = this.frame;

        const out = {
            geo4d: GEO4D(f),
            gta: GTA6_CHASE(f),
            amiga: AMIGA_SCROLL(f),
            sound: SOUND_BASS(f)
        };

        window.VECTOR_BRIDGE.send(out);

        if(document.getElementById("vectorASCII")){
            document.getElementById("vectorASCII").innerHTML =
                out.geo4d + "\n\n" +
                out.gta + "\n\n" +
                out.amiga + "\n\n" +
                out.sound;
        }
    }
};

setInterval(()=> window.VECTOR_ASCII.tick(), 120);
