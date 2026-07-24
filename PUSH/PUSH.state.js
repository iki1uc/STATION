class PUSH_STATE {

    detect(value){
        if(value === null) return "BLOCK";
        if(value === undefined) return "BLOCK";
        if(value === "HOLD") return "HOLD";
        return "READY";
    }
}

window.PUSH_STATE = new PUSH_STATE();
