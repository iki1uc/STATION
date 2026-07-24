export function drawOCTA(ctx){
    const cx = 300, cy = 300;
    const r = 120;

    ctx.strokeStyle = "#f33";
    ctx.lineWidth = 3;

    ctx.beginPath();
    for(let i=0;i<8;i++){
        const a = (Math.PI*2/8)*i;
        const x = cx + Math.cos(a)*r;
        const y = cy + Math.sin(a)*r;
        ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "#f33";
    ctx.font = "18px monospace";
    ctx.fillText("OCTA", cx - 30, cy - r - 10);
}
