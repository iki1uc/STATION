class RUN8 {

    start(){
        const fusion = ALL12_MASTER.start();

        ALL_MONITOR.update(fusion);
        INDEX_RENDER.render(fusion.index);
        VECTOR_RENDER.render27(fusion.vector);
        VECTOR_RENDER.render81(fusion.vector);

        return fusion;
    }
}

window.RUN8 = new RUN8();
