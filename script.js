function mostrarSorpresa() {
    const sorpresa = document.getElementById("sorpresa");
    sorpresa.classList.remove("hidden");
}

// ANIMACIÓN DE CORAZONES
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 15 + 10;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
    }
    draw() {
        ctx.fillStyle = `rgba(255, 0, 80, ${this.opacity})`;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(
            this.x - this.size / 2, this.y - this.size / 2,
            this.x - this.size, this.y + this.size / 3,
            this.x, this.y + this.size
        );
        ctx.bezierCurveTo(
            this.x + this.size, this.y + this.size / 3,
            this.x + this.size / 2, this.y - this.size / 2,
            this.x, this.y
        );
        ctx.fill();
    }
    update() {
        this.y -= this.speed;
        if (this.y < -20) {
            this.y = canvas.height + 20;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

function createHearts() {
    for (let i = 0; i < 40; i++) {
        hearts.push(new Heart());
    }
}
createHearts();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => h.update());
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});
