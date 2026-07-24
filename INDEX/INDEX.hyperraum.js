class INDEX_HYPERRAUM {

    build(karo){
        return karo.map(c => ({
            ...c,
            hyperraum: {
                warp: (c.id * GAM.gamma()) % 380,
                portal: c.portal,
                score: (c.id * 7) % 100,
                deg: (c.id * 13) % 360
            }
        }));
    }
}

window.INDEX_HYPERRAUM = new INDEX_HYPERRAUM();
