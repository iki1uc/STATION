function GEOID(mode, f){
    const spin = ["●","○","∙","•","◦"];
    const p = spin[f % spin.length];

    return `
GEO‑ID (${mode.toUpperCase()})
${p} ${p} ${p}

QI: ${p}
IQQ: ${p}${p}

STATE:
ID‑SYNC OK
`;
}
