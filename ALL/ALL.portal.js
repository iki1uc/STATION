export function ALL_PORTAL(){
    const out = { portal: "OPEN", stage: "RUN6" };
    ALL_RESPO.add("portal", out);
    return out;
}

export function ALL_PORTALFUSION(){
    const out = { fusion: "ACTIVE", mode: "ALL3E" };
    ALL_RESPO.add("fusion", out);
    return out;
}
