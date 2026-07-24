function GEOUniverse(f){
    const spin = ["●","○","∙","•","◦"];
    const p = spin[f % spin.length];

    return `
GEO‑UNIVERSE
${p} ${p} ${p} ${p}

ME = ROOT
QI = ${p}
IQQ = ${p}${p}
6D = aktiv
TRANSCORE = stabil

DIMENSION:
4D → 5D → 6D → ∞D

STATE:
SYNC OK
`;
}
