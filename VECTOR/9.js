function SOUND_FFT(f){
    const bars = ["▁","▂","▃","▄","▅","▆","▇","█"];
    const b = (i)=> bars[(f+i)%bars.length];

    return `
SOUND‑FFT‑BASS
${b(1)} ${b(3)} ${b(5)} ${b(7)} ${b(2)} ${b(4)} ${b(6)}
${b(7)} ${b(6)} ${b(5)} ${b(4)} ${b(3)} ${b(2)} ${b(1)}
${b(4)} ${b(2)} ${b(6)} ${b(1)} ${b(7)} ${b(3)} ${b(5)}
`;
}
