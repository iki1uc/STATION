function GEO4D(f){
    const d = ["●","○","·","∙","•"];
    const p = (i)=> d[(f+i)%d.length];

    return `
GEO‑4D
X: ${p(1)}   Y: ${p(2)}
Z: ${p(3)}   W: ${p(4)}

QI: ${p(1)}
IQQ: ${p(2)}${p(3)}

ROTATION:
${" ".repeat(f%20)}↻
`;
}
