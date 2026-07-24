class MEGA_INDEX {

    start(){
        const karo = INDEX_RESPO.build();
        const portal = INDEX_PORTAL.jump(karo);
        const hyper = INDEX_HYPERRAUM.build(portal);

        return hyper;
    }
}

window.MEGA_INDEX = new MEGA_INDEX();
