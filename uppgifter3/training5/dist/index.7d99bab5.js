const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const score = document.getElementById("score");
let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;
window.addEventListener("resize", ()=>{
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
});
let mouseX = 0;
let mouseY = 0;
canvas.addEventListener("mousemove", Cursor);
function Cursor(eve) {
    mouseX = eve.clientX;
    mouseY = eve.clientY;
}
score.style.top = "50px";
let timer = setInterval(Timer, 1000);
class Circle {
    constructor(x, y, vX, vY, r, color){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.color = color;
        this.dcolor = color;
        this.target = "#5A13F2";
    }
    Draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
        context.stroke();
    }
    Update(context) {
        if (this.vX && this.vY != 0) {
            this.x += this.vX;
            this.y += this.vY;
            if (this.r < player.r) this.color = this.target;
            else this.color = this.dcolor;
            this.Draw(context);
            if (this.x + this.r >= w || this.x - this.r <= 0) this.vX *= -1;
            if (this.y + this.r >= h || this.y - this.r <= 0) this.vY *= -1;
            if (this.x - this.r <= player.x && this.x + this.r >= player.x) {
                if (this.y + this.r >= player.y && this.y - this.r <= player.y) {
                    if (this.r < player.r) {
                        let i = (this.r - 5) / enemyDefault;
                        player.r = (i + 1) * enemyDefault + 5 + 1;
                        this.r = 0;
                    } else player.r = 0;
                }
            }
        } else {
            this.x = mouseX;
            this.y = mouseY;
            this.Draw(context);
        }
    }
}
let player;
let enemy = [];
let enemyPos = [
    Math.random() * w,
    Math.random() * h
];
let enemyV = [
    1,
    1
];
let enemyDefault = 2;
let enemies = 20;
let time = 0;
player = new Circle(w / 2, h / 2, 0, 0, enemyDefault + 5, "#138AF2");
player.Update(context);
for(let i = 0; i < enemies; i++){
    enemyPos = [
        Math.random() * (w - (enemies * enemyDefault + 5) * 2) + (0 + (enemies * enemyDefault + 5)),
        Math.random() * (h - (enemies * enemyDefault + 5) * 2) + (0 + (enemies * enemyDefault + 5))
    ];
    enemyV = [
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2
    ];
    enemy[i] = new Circle(enemyPos[0], enemyPos[1], enemyV[0], enemyV[1], i * enemyDefault + 5, "#C004D9");
    enemy[i].Draw(context);
}
Loop();
function Loop() {
    context.clearRect(0, 0, w, h);
    player.Update(context);
    for(let i = 0; i < enemies; i++)enemy[i].Update(context);
    requestAnimationFrame(Loop);
}
function Timer() {
    if (player.r >= enemies * enemyDefault + 5) {
        clearInterval(timer);
        time--;
    }
    time++;
    score.innerHTML = time.toString();
}

//# sourceMappingURL=index.7d99bab5.js.map
