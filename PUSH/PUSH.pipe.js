class PUSH_PIPE {

    forward(push){
        return {
            next:
                push.state === "PUSHED" ? "SEND" :
                push.state === "READY"  ? "RESPO" :
                "HOLD",
            signature: push.trigger,
            state: push.state
        };
    }
}

window.PUSH_PIPE = new PUSH_PIPE();
