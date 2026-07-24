export function drawPipeline(ctx){
    ctx.fillStyle = "#fff";
    ctx.font = "18px monospace";

    ctx.fillText("Pipeline 3 → 6 → 9 → 12", 180, 500);

    ctx.strokeStyle = "#6cf";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(150, 520);
    ctx.lineTo(450, 520);
    ctx.stroke();
}
