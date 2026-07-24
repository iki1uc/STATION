// VEC.js – Vector Engine für PQ / PX / PR

const VEC = {
    channel: "RUN8-CHANNEL",

    PX: {
        id: "PX-APPLE",
        type: "APPLE",
        state: "ready"
    },

    PQ: {
        id: "PQ-LAPTOP",
        type: "LAPTOP",
        state: "ready"
    },

    PR: {
        id: "PR-PC",
        type: "PC",
        state: "ready"
    },

    // Paket senden
    send(from, to, data) {
        return {
            from,
            to,
            data,
            time: Date.now(),
            channel: this.channel,
            status: "sent"
        };
    },

    // Paket empfangen
    recv(packet) {
        return {
            from: packet.from,
            to: packet.to,
            data: packet.data,
            channel: packet.channel,
            time: packet.time,
            end: "OK"
        };
    }
};

export default VEC;
