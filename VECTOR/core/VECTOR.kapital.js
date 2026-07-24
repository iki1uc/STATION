class VECTOR_KAPITAL {

    potent(name){
        const base = name.length * 7;
        const bonus = GAM.gamma() % 33;
        const score = base + bonus;

        return {
            name,
            kapital: score,
            status: score > 50 ? "WIN" : "RENAME"
        };
    }
}

window.VECTOR_KAPITAL = new VECTOR_KAPITAL();
