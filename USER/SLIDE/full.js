import { GEOM } from "./geom.js";

export function SLIDE_FULL_ENGINE(input) {

    const tick = CLOCK(input);
    const clou = FINALCLOU(tick);
    const slide = SLIDE(clou);
    const shift = SHIFT(input);
    const respo = RESPO(slide.shift);

    const geom = GEOM(slide.pos, slide.shift, slide.rot);

    return {
        input,
        tick,
        clou,
        slide,
        shift,
        respo,
        geom,
        allin: { CLOCK: tick, CLOU: clou, SLIDE: slide, SHIFT: shift, RESPO: respo },
        allout: {
            movement: slide.shift,
            position: slide.pos,
            rotation: slide.rot,
            stability: respo.ok,
            vector: geom.vector
        }
    };
}
