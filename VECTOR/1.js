function GTA6_CHASE(f){
    const car = f%2 ? "🚗" : "🚓";
    const cop = f%3 ? "🚓" : "🚨";
    const boom = f%4 ? "🔥" : "💥";
    const city = "🏙".repeat(10);

    return `
GTA‑6 POLICE CHASE
${car}──${city}──${cop}
${cop}──${boom}──${car}
${boom}──${cop}──${city}
`;
}
