class PUSH {

    constructor(){
        this.input = null;
        this.state = "INIT";
        this.trigger = null;
    }

    enter(value){
        this.input = value;
        this.state = "RECEIVED";
    }

    activate(){
        this.trigger = this.input;
        this.state = "PUSHED";
        return this.trigger;
    }

    compute(){
        return {
            input: this.input,
            trigger: this.trigger,
            state: this.state
        };
    }
}

window.PUSH = new PUSH();
