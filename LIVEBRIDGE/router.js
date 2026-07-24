import { LIVE_CORE } from "./modules/live-core.js";
import { LIVE_PULSE } from "./modules/live-pulse.js";
import { LIVE_SYNC } from "./modules/live-sync.js";
import { LIVE_WEBSOCKET } from "./modules/live-websocket.js";

export const Router = {
    route(target) {
        switch(target) {
            case "pulse": LIVE_PULSE.send(); break;
            case "sync": LIVE_SYNC.start(); break;
            case "ws": LIVE_WEBSOCKET.connect(); break;
            default: console.log("Unbekannt:", target);
        }
    }
};

