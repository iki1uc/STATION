class ALL12_MASTER {

    start(){
        const index = MEGA_INDEX.start();
        const vector = VECTOR_OPTIMIZER.optimize(index);
        const all = ALL.autoSwitch();

        return {
            index,
            vector,
            all
        };
    }
}

window.ALL12_MASTER = new ALL12_MASTER();
