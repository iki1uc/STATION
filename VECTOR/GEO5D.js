function GEO5D(f){
    const d = ["●","○","·","∙","•","◦"];
    const p = (i)=> d[(f+i)%d.length];

    return `
GEO‑5D
X: ${p(1)}   Y: ${p(2)}
Z: ${p(3)}   W: ${p(4)}
V: ${p(5)}

QI: ${p(1)}
IQQ: ${p(2)}${p(3)}

SPIN:
${" ".repeat(f%25)}⟳
`;
}
