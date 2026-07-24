function GTA6_STORY(f){
    const hero = f%2 ? "🧍" : "🏃";
    const car = "🚗";
    const city = "🏙".repeat(8);

    return `
GTA‑6 STORY MODE
Hero: ${hero}
Car : ${car}
City: ${city}

Mission:
${f%2 ? "Escape the cops!" : "Find the safehouse!"}
`;
}
