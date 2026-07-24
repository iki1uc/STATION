class VECTOR_RESPO {

    constructor(){
        this.map = {};
    }

    load(all, gam){
        this.map = {
            CORE_ROUTER: all.CORE_ROUTER,
            MULTI_NORM: all.MULTI_NORM,
            UI_STATUS: all.UI_STATUS,
            POSITION_USER: all.POSITION_USER,
            MODUL_LOOP: all.MODUL_LOOP,
            BEAM_POINT: all.BEAM_POINT,
            CODE_PIPELINE: all.CODE_PIPELINE,
            ORT_LAGE: all.ORT_LAGE,
            NAME: all.NAME,

            GAM_GATE: gam.GATE,
            GAM_GAMBLE: gam.GAMBLE,
            GAM_GAMMA: gam.GAMMA
        };
        return this.map;
    }
}

window.VECTOR_RESPO = new VECTOR_RESPO();
