const canvas = document.getElementById("game");
const context = canvas.getContext('2d');

let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;

let distance = 1;
let mouse = [0, 0];

let ball = [];
let settings = {
    "balls": 600,
    "ballRadius": 0.5,
    "speed": 2,
    "ballColor": "rgba(0, 255, 0, 1)", 
    "lineColor": [0, 255, 0, 1],
    "lineWidth": 1,
    "lineRadius": 80,
    "fade": 1,
}

canvas.addEventListener("mousemove", function (eve){
    mouse = [eve.clientX, eve.clientY];
});
window.addEventListener("resize", function (eve){
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
});

class Circle{
    constructor(x,y,vX,vY,r,color,lineColor,linewidth){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.color = color;
        this.lineColor = lineColor;
        this.linewidth = linewidth;
    }
    Draw(context){
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle = this.color;        
        
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fill();

        context.closePath();
        context.stroke();
        for(let i = 0; i < ball.length; i++){
            
            if(ball[i].x > this.x - settings.lineRadius && ball[i].x < this.x + settings.lineRadius && ball[i].y > this.y - settings.lineRadius && ball[i].y < this.y + settings.lineRadius){
                context.beginPath();

                distance = Math.sqrt(Math.pow(ball[i].x - this.x, 2) + Math.pow(ball[i].y - this.y, 2));
                

                context.strokeStyle = "rgba(" + this.lineColor[0] + "," + this.lineColor[1] + "," + this.lineColor[2] + "," + this.lineColor[3] * (settings.lineRadius - distance) * 0.01 * settings.fade + ")";
                context.lineWidth = settings.lineWidth;
                

                context.moveTo(this.x, this.y);

                context.lineTo(ball[i].x, ball[i].y);
                
                context.closePath();
                context.stroke();
            }
        }
    }
    Update(context){
        if(this.x < 0 || this.x > w){
            this.vX *= -1;
        }
        if(this.y < 0 || this.y > h){
            this.vY *= -1;
        }

        this.x += this.vX;
        this.y += this.vY;

        this.Draw(context);
    }
}



for(let i = 0; i < settings.balls; i++){
    ball[i] = new Circle(Math.random() * w, Math.random() * h, (Math.random() - 0.5) * settings.speed, (Math.random() - 0.5) * settings.speed, settings.ballRadius, settings.ballColor, settings.lineColor, settings.lineWidth);
}

Loop();

function Loop(){
    context.clearRect(0, 0, w, h);
    

    for(let i = 0; i < ball.length; i++){

        ball[i].Update(context);
    }

    requestAnimationFrame(Loop);
}