const canvas = document.getElementById("game");
const context = canvas.getContext('2d');
const score = document.getElementById("score");

let w = window.innerWidth;
let h = window.innerHeight;

canvas.width = w;
canvas.height = h;

let keys = [];
let mouse = [];
let angle = 0;
let readAngle = 0;
let bulletCool = false;

window.addEventListener("keydown", KeyDown);
function KeyDown(eve) {
    console.log(eve);
    keys[eve.key] = true;
}
window.addEventListener("keyup", KeyUP);
function KeyUP(eve) {
    keys[eve.key] = false;
}
canvas.addEventListener("mousemove", MouseMove);
function MouseMove(eve) {
    mouse["x"] = eve.clientX;
    mouse["y"] = eve.clientY;

    let dx = mouse["x"] - player.x;
    let dy = mouse["y"] - player.y;


    angle = Math.atan2(dy, dx);
}
canvas.addEventListener("mousedown", MouseDown);
function MouseDown(eve) {
    console.log(eve);
    mouse["click"] = true;
}
canvas.addEventListener("mouseup", MouseUP);
function MouseUP(eve) {
    console.log(eve);
    mouse["click"] = false;
}
window.addEventListener("resize", Resize);
function Resize(eve) {
    console.log(eve);
    
    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;
}

class Player{
    constructor(x,y,vX,vY,r,color,gun){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.color = color;
        this.gun = gun;
    }
    Draw(context){
        
        

        context.beginPath();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        
        

        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
        context.stroke();

        context.save();
        context.translate(this.x, this.y);
        
        context.rotate(angle);
        context.fillRect(0, 0 + -6, 30, 12);
        context.beginPath();
        
        
        context.stroke();
        
        context.closePath();
        
        context.restore();
        
    }
    Update(context){
        this.vX *= 0.9;
        this.vY *= 0.9;

        this.x += this.vX;
        this.y += this.vY;
        
        this.Draw(context);
    }
}
class Bullet{
    constructor(x, y, vX, vY, r, color, angle){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.color = color;
        this.angle = angle;
    }
    Draw(context){
        context.save();
        context.translate(this.x, this.y);
        
        context.rotate(this.angle);
        context.beginPath();
        
        context.strokeStyle = this.color;
        context.arc(0, 0, 5, 0, Math.PI * 2, false);
        context.stroke();
        
        context.closePath();
        
        context.restore();
    }
    Update(context){
        this.x += this.vX;
        this.y += this.vY;

        this.Draw(context);
    }
}

class Enemy{
    constructor(x,y,vX,vY,r,color,gun){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.color = color;
        this.gun = gun;
        this.angle = 0;
    }
    Draw(context){
        
        

        context.beginPath();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        
        

        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
        context.stroke();

        context.save();
        context.translate(this.x, this.y);
        

        context.rotate(this.angle);
        context.fillRect(0, 0 + -6, 40, 12);
        context.beginPath();
        
        
        context.stroke();
        
        context.closePath();
        
        context.restore();
        
    }
    Update(context){
        let dx = player.x - this.x;
        let dy = player.y - this.y;


        this.angle = Math.atan2(dy, dx);

        this.vX = Math.cos(this.angle);
        this.vY = Math.sin(this.angle);

        this.x += this.vX;
        this.y += this.vY;
        
        this.Draw(context);
    }
}
class Blank{
    constructor(){

    }
    Update(context){

    }
}

let player = new Player(600, 500, 0, 0, 20, "#6C78FF", 1);
let enemy = [];
let bullet = [];
let ebullet = [];
let i = 0;

let ennemyControll = setInterval(EnemyControll, 3000);

function EnemyControll() {

    enemy[enemy.length] = new Enemy(Math.random() * w, Math.random() * h, 0, 0, 30, "red", 1);

    for(let i = 0; i < enemy.length; i++){
        let dx = player.x - enemy[i].x;
        let dy = player.y - enemy[i].y;

        ebullet[i] = new Bullet(enemy[i].x, enemy[i].y, Math.cos(Math.atan2(dy ,dx)) * 8, Math.sin(Math.atan2(dy ,dx)) * 8, 40, "red", angle);
    }
    
}

let bulletCooldown = setInterval(BulletCooldown, 500);

function BulletCooldown() {
    bulletCool = false;
}

Loop();

function Loop(){
    context.clearRect(0, 0, w, h);
    
    player.Update(context);

    for(let i = 0; i < enemy.length; i++){
        enemy[i].Update(context);
        ebullet[i].Update(context);
        if(ebullet[i].x >= player.x - player.r && 
            ebullet[i].x <= player.x + player.r && 
            ebullet[i].y >= player.y - player.r && 
            ebullet[i].y <= player.y + player.r){
            player = new Blank();
            clearInterval(ennemyControll);

        }
    }
    

    if(keys["w"] == true){
        player.vY += -1;
    }
    if(keys["s"] == true){
        player.vY += 1;
    }
    if(keys["a"] == true){
        player.vX += -1;
    }
    if(keys["d"] == true){
        player.vX += 1;
    }

    if(mouse["click"] == true){


        if(bulletCool == false){
            bullet[i] = new Bullet(player.x, player.y, Math.cos(angle) * 8, Math.sin(angle) * 8, 40, "#6C78FF", angle);
            bullet[i].Update(context);

            i++;
            if(i >= 400){
                i = 0;
            }
            bulletCool = true;
        }
        
    }

    

    for(let i = 0; i < bullet.length; i++){
        
        for(let ix = 0; ix < enemy.length; ix++){
            if(bullet[i].x >= enemy[ix].x - enemy[ix].r && bullet[i].x <= enemy[ix].x + enemy[ix].r && bullet[i].y >= enemy[ix].y - enemy[ix].r && bullet[i].y <= enemy[ix].y + enemy[ix].r){
                enemy[ix] = new Blank();
                score.innerHTML = parseInt(score.innerHTML) + 1;
                
            }
        }
        

        bullet[i].Update(context);
    }

    if(player.x < 0){
        player.x = 0;
    }
    if(player.x > w){
        player.x = w;
    }
    if(player.y < 0){
        player.y = 0;
    }
    if(player.y > h){
        player.y = h;
    }

    requestAnimationFrame(Loop);
}