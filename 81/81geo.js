export function draw81geo(ctx){
    const size = 9;
    const cell = 40;
    const offset = 50;

    ctx.fillStyle = "#111";
    ctx.fillRect(0,0,600,600);

    for(let y=0; y<size; y++){
        for(let x=0; x<size; x++){
            const val = (y * size) + x + 1;

            ctx.strokeStyle = "#0f0";
            ctx.strokeRect(offset + x*cell, offset + y*cell, cell, cell);

            ctx.fillStyle = "#6cf";
            ctx.font = "14px monospace";
            ctx.fillText(val, offset + x*cell + 12, offset + y*cell + 24);
        }
    }

    ctx.fillStyle = "#f90";
    ctx.font = "20px monospace";
    ctx.fillText("81 · QI/IQQ/OCTA · GEO‑Matrix", 120, 30);
}
