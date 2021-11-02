const canvas = document.querySelector("#game");
/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

let wW = window.innerWidth;
let wH = window.innerHeight;

let W = 800;
let H = wH;

canvas.width = W;
canvas.height = H;

class Circle{
    constructor(x, y, vX, vY, r, color){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.color = color;
    }
    Draw(context){
        context.beginPath();

        context.strokeStyle = this.color;
        context.fillStyle = this.color;

        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fill();
        
        context.stroke();
        
        context.closePath();
    }
    Update(){
        this.x += this.vX;
        this.y += this.vY;
    }
}

let ball = new Circle(100, 50, 0, 0, 30, "red");
ball.Draw(context);
let player = new Circle(100, 50, 0, 0, 30, "aqua");
player.Draw(context);
let distance = 0;
let angle = 0;


let lastTime = 0;
function Loop(time){
    if(time - lastTime < 1000 / 60){
        requestAnimationFrame(Loop);
        return;
    }

    if(ball.y + ball.r >= H){
        ball.y = H - ball.r
        ball.vY *= -1;
    }
    if(ball.y - ball.r <= 0){
        ball.y = 0 + ball.r
        ball.vY *= -1;
    }
    if(ball.x + ball.r >= W){
        ball.x = W - ball.r;
        ball.vX *= -1;
    }
    if(ball.x - ball.r <= 0){
        ball.x = 0 + ball.r;
        ball.vX *= -1;
    }
    Calculate();

    //ball.vY += 0.3;
    ball.Update();

    context.clearRect(0,0,W,H);
    ball.Draw(context);
    player.Draw(context);


    lastTime = time;
    requestAnimationFrame(Loop);
}
requestAnimationFrame(Loop);

function Calculate(){
    distance = Math.round(Math.sqrt(Math.pow(Math.abs(ball.x - player.x), 2) + Math.pow(Math.abs(ball.y - player.y), 2)));
    angle = Math.atan2(ball.y - player.y, ball.x - player.x);
    console.log(angle);
}

canvas.addEventListener("mousemove", (eve) => {
    player.x = eve.offsetX;
    player.y = eve.offsetY;
});