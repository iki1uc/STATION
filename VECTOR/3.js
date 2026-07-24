function AMIGA_MEGA(f){
    const bars = ["██████████","▓▓▓▓▓▓▓▓▓","▒▒▒▒▒▒▒▒▒","░░░░░░░░░"];
    const scroll = " AMIGA · VECTOR · ULTRA · GEO‑UNIVERSE ".repeat(2);
    const pos = f % scroll.length;

    return `
AMIGA‑MEGA‑DEMO
${scroll.slice(pos)}${scroll.slice(0,pos)}

${bars[f%4]}
${bars[(f+1)%4]}
${bars[(f+2)%4]}
`;
}
