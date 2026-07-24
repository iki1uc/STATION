export const LIVE_WEBSOCKET = {
    connect() {
        console.log("WebSocket verbinden...");
        const ws = new WebSocket("wss://echo.websocket.org");

        ws.onopen = () => console.log("WS verbunden");
        ws.onmessage = msg => console.log("WS Nachricht:", msg.data);
        ws.onerror = err => console.error("WS Fehler:", err);
    }
};

