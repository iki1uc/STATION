class RUN8 {

    start(){
        const respo = VECTOR_RESPO.load(ALL.respo, GAM.respo);

        const ring27 = VECTOR.build27(respo);
        const ring81 = VECTOR81.build();

        VECTOR_RENDER.render27(ring27);
        VECTOR_RENDER.render81(ring81);

        return { ring27, ring81 };
    }
}

window.RUN8 = new RUN8();
