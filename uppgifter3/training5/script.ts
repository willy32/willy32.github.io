const canvas:HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
const context:CanvasRenderingContext2D = canvas.getContext("2d");
const score:HTMLParagraphElement = document.getElementById("score") as HTMLParagraphElement;

let w:number = window.innerWidth;
let h:number = window.innerHeight;

canvas.width = w;
canvas.height = h;
window.addEventListener("resize", () => {
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;
});

let mouseX:number = 0;
let mouseY:number = 0;
canvas.addEventListener("mousemove", Cursor);
function Cursor(eve:MouseEvent):void{
    mouseX = eve.clientX;
    mouseY = eve.clientY;
}

score.style.top = 50 + "px";
let timer:number = setInterval(Timer, 1000);


class Circle{
    x:number;
    y:number;
    vX:number;
    vY:number;
    r:number;
    color:string;
    dcolor:string;
    target:string;

    constructor(x:number, y:number, vX:number, vY:number, r:number, color:string){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.color = color;
        this.dcolor = color;
        this.target = "#5A13F2";
    }
    Draw(context:CanvasRenderingContext2D):void{
        context.beginPath();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
        context.stroke();
        
    }
    Update(context:CanvasRenderingContext2D):void{
        if(this.vX && this.vY != 0){
            this.x += this.vX;
            this.y += this.vY;

            if(this.r < player.r){
                this.color = this.target;
            }else{
                this.color = this.dcolor;
            }

            this.Draw(context);

            if(this.x + this.r >= w || this.x - this.r <= 0){
                this.vX *= -1;
            }
            if(this.y + this.r >= h || this.y - this.r <= 0){
                this.vY *= -1;
            }
            if(this.x - this.r <= player.x && this.x + this.r >= player.x){
                if(this.y + this.r >= player.y && this.y - this.r <= player.y){
                    if(this.r < player.r){
                        let i:number = (this.r - 5) / enemyDefault;
                        player.r = (i + 1) * enemyDefault + 5 + 1;
                        this.r = 0;
                    }else{
                        player.r = 0;
                    }
                }
                
            }else{

            }
        }else{
            this.x = mouseX;
            this.y = mouseY;

            this.Draw(context);
        }
    }
}

let player:Circle;

let enemy:Circle[] = [];
let enemyPos:number[] = [Math.random() * w, Math.random() * h];
let enemyV:number[] = [1, 1];
let enemyDefault:number = 2;
let enemies:number = 20;

let time:number = 0;

player = new Circle(w / 2, h / 2, 0, 0, enemyDefault + 5, "#138AF2");
player.Update(context);

for(let i:number = 0; i < enemies; i++){
    enemyPos = [
        Math.random() * (w - (enemies * enemyDefault + 5) * 2) + (0 + (enemies * enemyDefault + 5)), 
        Math.random() * (h - (enemies * enemyDefault + 5) * 2) + (0 + (enemies * enemyDefault + 5))
    ];
    enemyV = [(Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2]
    enemy[i] = new Circle(enemyPos[0], enemyPos[1], enemyV[0], enemyV[1], i * enemyDefault + 5, "#C004D9");
    enemy[i].Draw(context);
}
Loop();

function Loop(){
    context.clearRect(0, 0, w, h);
    
    player.Update(context);

    for(let i:number = 0; i < enemies; i++){
        enemy[i].Update(context);
    }

    requestAnimationFrame(Loop);
}

function Timer():void{
    if(player.r >= (enemies) * enemyDefault + 5){
        clearInterval(timer);
        time--;
    }

    time++;
    
    score.innerHTML = time.toString();
}