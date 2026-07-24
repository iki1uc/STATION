class VECTOR_OPTIMIZER {

    optimize(list){
        return list.map(c => ({
            ...c,
            vector: {
                qi: (c.id * 3) % 9,
                iqq: (c.id * 5) % 9,
                octa: (c.id * 7) % 9
            }
        }));
    }
}

window.VECTOR_OPTIMIZER = new VECTOR_OPTIMIZER();
