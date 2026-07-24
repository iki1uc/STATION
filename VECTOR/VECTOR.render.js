window.VECTOR_ASCII = {
    frame: 0,

    tick(){
        this.frame++;
        const f = this.frame;

        const out = `
${GEO4D(f)}

${GEO5D(f)}

${GEO_UNIVERSE(f)}

${GTA6_CHASE(f)}

${GTA6_STORY(f)}

${AMIGA_MEGA(f)}

${SOUND_FFT(f)}
`;

        const box = document.getElementById("vectorASCII");
        if(box){
            box.innerHTML = out;
        }
    }
};

setInterval(()=> window.VECTOR_ASCII.tick(), 120);
