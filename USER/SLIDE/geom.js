export function GEOM(x, y, z) {

    return {
        vector: Math.sqrt(x*x + y*y + z*z),
        angleXY: Math.atan2(y, x),
        angleXZ: Math.atan2(z, x),
        angleYZ: Math.atan2(z, y)
    };
}
