const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function boundary() {  
    const boundaryWidth = Math.min(500, canvas.width - 20);
    const boundaryHeight = 500;

    // calculate center position (canvas.width sucks asss)
    const boundaryX = (window.innerWidth - boundaryWidth) / 2;
    const boundaryY = 50;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.strokeRect(boundaryX, boundaryY, boundaryWidth, boundaryHeight);
}

function draw() {
    resizeCanvas();
    boundary();
}

window.addEventListener("resize", draw);

draw();