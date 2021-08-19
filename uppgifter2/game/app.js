const canvas = document.querySelector("#game");
const context = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 800;

let keys = {
    "w":false,
    "a":false,
    "s":false,
    "d":false
}
let alive = true;

class Box{
    constructor(x,y,w,h,color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
    }
}
class Circle{
    constructor(x,y,r,color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }
    draw() {
        context.beginPath();
        context.strokeStyle = this.color;
        context.arc(this.x, this.y, this.r, 0,Math.PI * 2);
        context.closePath();
        context.stroke();
    }
}

let player1 = new Box(30, 400, 50, 50, "hotpink");
let obstacle = [
    new Box(250, 400, 50, 50, "black"), 
    new Box(0,(canvas.height - 10), 1000, 30)];

setInterval(Loop, 1)

function Loop(){
    Update();
    Draw();
}

function Update(){
    CheckWalls();
    CheckObstcale();
    if(alive == true){
        Move();
    }
}
function Draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    

    player1.draw();
    for(i = 0; i < obstacle.length; i++){
        obstacle[i].draw();
    }
}


function Move(){
    if(keys.w){
        player1.y -= 1
    }
    if(keys.a){
        player1.x -= 1
    }
    if(keys.s){
        player1.y += 1
    }
    if(keys.d){
        player1.x += 1
    }
}
function CheckWalls(){
    if(player1.x < 0){
        keys.a = false;
    }
    if(player1.y < 0){
        keys.w = false;
    }
    if((player1.x + player1.w) > canvas.width){
        keys.d = false;
    }
    if((player1.y + player1.h) > canvas.height){
        keys.s = false;
    }
}
function CheckObstcale(){
    for(i = 0; i < obstacle.length; i++){
        if((player1.x + player1.w) >= obstacle[i].x && 
        (player1.y + player1.h) > obstacle[i].y &&
        player1.y < (obstacle[i].y + obstacle[i].h) &&
        player1.x < (obstacle[i].x + obstacle[i].w)){
            keys.d = false;
            //player1.x -= 1;
        }
        if((player1.y + player1.h) >= obstacle[i].y &&
        (player1.x + player1.w) > obstacle[i].x &&
        player1.x < (obstacle[i].x + obstacle[i].w) &&
        player1.y < (obstacle[i].y + obstacle[i].h)){
            keys.s = false;
            //player1.y -= 1;
        }
        if(player1.x <= (obstacle[i].x + obstacle[i].w) && 
        (player1.y + player1.h) > obstacle[i].y &&
        player1.y < (obstacle[i].y + obstacle[i].h) &&
        (player1.x + player1.w) > obstacle[i].x){
            keys.a = false;
            //player1.x += 1;
        }
        if(player1.y <= (obstacle[i].y + obstacle[i].h) &&
        (player1.x + player1.w) > obstacle[i].x &&
        player1.x < (obstacle[i].x + obstacle[i].w) &&
        (player1.y + player1.w) > obstacle[i].y){
            keys.w = false;
        }
    }
}

//Keyboard Inputs   VVV
window.addEventListener("keydown",(e) => {
    if(e.key == "w"){
        keys.w = true;
    }
    if(e.key == "a"){
        keys.a = true;
    }
    if(e.key == "s"){
        keys.s = true;
    }
    if(e.key == "d"){
        keys.d = true;
    }
});
window.addEventListener("keyup",(e) => {
    if(e.key == "w"){
        keys.w = false;
    }
    if(e.key == "a"){
        keys.a = false;
    }
    if(e.key == "s"){
        keys.s = false;
    }
    if(e.key == "d"){
        keys.d = false;
    }
});