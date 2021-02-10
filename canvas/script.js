const canvas = document.getElementById("canv");
const context = canvas.getContext('2d');

let w = window.innerWidth;
let h = window.innerHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = canvas.addEventListener("mousemove", info)
let mouseX = 0;
let mouseY = 0;

class Circle{
    constructor(x, y, vX, vY, r, color){
        this.x = x;
        this.y = y;
        this.scaleR = 0.7;
        this.vX = vX * this.scaleR;
        this.vY = vY * this.scaleR;
        this.r = r;
        this.maxr = 50;
        this.minr = r;
        this.mouseBox = 200;
        this.color = color;
    }
    Draw(context){
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = 0.5;
        context.shadowColor=this.color;
        
        context.shadowBlur = 10;
        
        
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        
        context.fill();
        context.stroke();
        context.closePath();
    }
    Update(context){
        
        this.x += this.vX;
        this.y += this.vY;

        this.Draw(context);

        if(this.x + this.r >= w || this.x - this.r <= 0){
            this.vX *= -1;
        }
        if(this.y + this.r >= h || this.y - this.r <= 0){
            this.vY *= -1;
        }

        if(this.x - this.mouseBox / 2 < mouseX  && this.x - this.mouseBox / 2 > mouseX - this.mouseBox && this.y - this.mouseBox / 2 < mouseY && this.y - this.mouseBox / 2 > mouseY - this.mouseBox){
            if(this.r < this.maxr){
                this.r++;
            }
        }else{
            if(this.r > this.minr){
                this.r--;
            }
        }
        
    }
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
canvas.addEventListener("click", yes);

function yes(eve){
    console.log(eve);

    context.clearRect(0, 0, w, h);
    for(let i = 0; i < bitch.length; i++){
        bitch[i].Update(context);
    }
}

bitch = [];
randomPossy = {
"X": 100,
"Y": 100,
"R": 10,
"colors": [
        "#6AA7F7",
        "#686DFC",
        "#976AE6",
        "#DB68FC",
        "#F543BB",
    ],
    "color": "white",
    "vX": 1,
    "vY": 1,
    "speed": 1
};

function info(eve){
    mouseX = eve.clientX;
    mouseY = eve.clientY;
}

function Loop(){
    context.clearRect(0, 0, w, h);
    for(let i = 0; i < bitch.length; i++){
        bitch[i].Update(context);
    }
    
    requestAnimationFrame(Loop);
}

for(let i = 0; i < 500; i++){
    Randomize();

    bitch[i] = new Circle(randomPossy.X, randomPossy.Y, randomPossy.vX, randomPossy.vY, randomPossy.R, randomPossy.color);
    bitch[i].Draw(context);
}

Loop();
function Randomize(){
    randomPossy.R = Math.round(Math.random() * 4 + 1);

    randomPossy.X = Math.round(Math.random() * w - randomPossy.R);
    randomPossy.Y = Math.round(Math.random() * h - randomPossy.R);
    randomPossy.color = randomPossy.colors[Math.round(Math.random() * randomPossy.colors.length)];
    randomPossy.vX = (Math.random() - 0.5) * randomPossy.speed; 
    randomPossy.vY = (Math.random() - 0.5) * randomPossy.speed; 
}