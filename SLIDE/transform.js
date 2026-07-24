import { GEOM } from "./geom.js";

export function TRANSFORM_12e_6e_6d_12e(input) {

    const full = SLIDE_FULL_ENGINE(input);

    const sixE = {
        movement: full.slide.shift,
        position: full.slide.pos,
        rotation: full.slide.rot,
        coord: full.slide,
        cor: full.respo,
        id: "SLIDE"
    };

    const sixD = {
        x: sixE.position,
        y: sixE.movement,
        z: sixE.rotation,
        shift: sixE.movement,
        pos: sixE.position,
        rot: sixE.rotation
    };

    const geom = GEOM(sixD.x, sixD.y, sixD.z);

    const twelveE = {
        tick: sixD.x * 1.1,
        clou: sixD.y * 0.9,
        slide: {
            shift: sixD.y,
            pos: sixD.x,
            rot: sixD.z
        },
        shift: sixD.y,
        respo: (sixD.y > sixD.x),
        nat: sixD.z * 12,
        di: sixD.x + sixD.y + sixD.z,
        coord: sixD,
        cor: sixD.y / sixD.x / sixD.z,
        geom,
        id: "SLIDE",
        tmp: "D:/tmp",
        hdf: "81.room"
    };

    return { input, full, sixE, sixD, geom, twelveE };
}
