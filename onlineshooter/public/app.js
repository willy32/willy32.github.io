const body = document.querySelector("body");
const canvas = document.querySelector("#game");
const context = canvas.getContext('2d');

const w = 1200;
const h = 800;
let bW = window.innerWidth;
let bH = window.innerHeight;

canvas.width = w;
canvas.height = h;

let controls = {
    "w": false,
    "a": false,
    "s": false,
    "d": false,

    "ml": false,
    "mr": false,
    "mX": 0,
    "mY": 0
};

class Player{
    constructor(x, y, vX, vY, angle, r, speed, gun, color, name){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.angle = angle;

        this.r = r;

        this.speed = speed;
        this.gun = gun;
        this.color = color;
        this.name = name;
    }
    Update(){
        this.vX *= 0.9;
        this.vY *= 0.9;
        this.x += this.vX * this.speed;
        this.y += this.vY * this.speed;
    }
    Draw(context){
        context.beginPath();
        context.save();
        let cX = this.x;
        let cY = this.y;

        // Player Appearance //
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        context.font='15px Arial';

        // Draws Name //
        context.fillText(this.name, this.x, this.y - this.r - 5);

        // Rotates The Player //
        context.translate(cX, cY);
        context.rotate(Math.PI / 180 * this.angle);
        context.translate(-cX, -cY);
        
        // Draws Circle //
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);

        // Draws Gun //
        if(this.gun == "pistol") context.fillRect(this.x, this.y - (10 / 2), 30, 10);
        
        // Draws Everything //
        context.fill();
        context.stroke();
        context.restore();
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
        context.beginPath();
        context.save();
        let cX = this.x;
        let cY = this.y;

        // Bullet Appearance //
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        
        // Draws Circle //
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);

        
        // Draws Everything //
        context.fill();
        context.stroke();
        context.restore();
    }
    Update(){
        this.x += this.vX;
        this.y += this.vY;
    }
}
class Wall{
    constructor(x, y, w, h, color, texture){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.texture = texture;
    }
    Draw(context){
        // Wall Appearance //
        context.fillStyle = this.color;
        
        // Draws The Wall //
        context.fillRect(this.x, this.y, this.w, this.h);
        
    }
}

let score = 0;
let player = new Player(Math.random() * w, Math.random() * h, 0, 0, 0, 20, 1.5, "pistol", "blue", score.toString());
let walls = [];
let enemies = {};
let bullets = [];
let ebullets = [];
let playerdata = [];
let bulletdata = {};
let enemyList = [];

let pastTime = 0;
function Loop(time){
    // Handles The Loop //
    let currentTime = time - pastTime;
    let fps = 60;
    if(currentTime < 1000 / fps){
        requestAnimationFrame(Loop);
        return;
    }


    Controls();
    FireGun();
    WallCollision(walls);
    BulletCollision();

    player.Update();
    UpdateBullets(bullets);

    // Compiles Playerdata And Sends Playerdata //
    playerdata = [];
    //sendBullets = [];
    playerdata.push({
        "x": Math.round(player.x),
        "y": Math.round(player.y),
        "r": player.r,
        "angle": Math.round(player.angle),
        "color": player.color,
        "gun": player.gun,
        "name": player.name
    });
    /*bullets.forEach(bullet => {
        sendBullets.push({
            "x": Math.round(bullet.x),
            "y": Math.round(bullet.y),
            "r": bullet.r,
            "color": bullet.color,
        });
    });
    playerdata.push(sendBullets);*/
    SendPlayerData(playerdata);

    // Draws Everything On Canvas //
    context.clearRect(0, 0, w, h);
    player.Draw(context);
    DrawWalls(walls);
    DrawBullets(bullets);
    DrawEnemy(enemies);

    // Restarts The Loop //
    pastTime = time;
    requestAnimationFrame(Loop);
}
requestAnimationFrame(Loop);

function Controls(){
    // Movement Keys //
    if(controls.d == true){
        player.vX += 1;
    }
    if(controls.a == true){
        player.vX += -1;
    }
    if(controls.s == true){
        player.vY += 1;
    }
    if(controls.w == true){
        player.vY += -1;
    }

    // Gives The Player An Angle That Aims Towards The Cursor //  
    let dx = controls.mX - player.x;
    let dy = controls.mY - player.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    player.angle = angle;
}
function UpdateBullets(bullets){
    bullets.forEach(bullet => {
        bullet.Update();
    });

    
    enemyList.forEach((enemyID) => {
        bullets.forEach((bullet, index) => {
            let bdX = Math.abs(bullet.x - enemies[enemyID].x);
            let bdY = Math.abs(bullet.y - enemies[enemyID].y);
            let bDistence = Math.abs(Math.sqrt(Math.pow(bdX, 2) + Math.pow(bdY, 2)));

            if(bDistence <= enemies[enemyID].r + bullet.r){
                console.log("Hit Enemy!!!");
                score++;
                player.name = score.toString();
                bullets.splice(index, 1);
            }
        });
    });
    


    ebullets.forEach(bullet => {
        bullet.Update();
    });
}
function DrawBullets(bullets){
    bullets.forEach(bullet => {
        bullet.Draw(context);
    });
    ebullets.forEach(bullet => {
        bullet.Draw(context);
    });
}
function WallCollision(walls){
    if(player.x <= 0 || player.x >= w){
        player.x += (player.r + 10) * -Math.sign(player.vX) * 0.5;
        player.vX *= -0.5;
    }
    if(player.y <= 0 || player.y >= h){
        player.y += (player.r + 10) * -Math.sign(player.vY) * 0.5;
        player.vY *= -0.5;
    }
    bullets.forEach((bullet, index) => {
        if(bullet.x <= 0 || bullet.x >= w) bullets.splice(index, 1);
        if(bullet.y <= 0 || bullet.y >= h) bullets.splice(index, 1);
    });
    
    ebullets.forEach((bullet, index) => {
        if(bullet.x <= 0 || bullet.x >= w) ebullets.splice(index, 1);
        if(bullet.y <= 0 || bullet.y >= h) ebullets.splice(index, 1);
    });
    

    walls.forEach(wall => {
        if(player.x + player.r >= wall.x &&
            player.y <= wall.y + wall.h && 
            player.y >= wall.y &&
            player.x <= wall.x + wall.w){
            player.x = wall.x - player.r - 1;
            player.vX *= -0.5;
        }
        if(player.y + player.r >= wall.y && 
            player.x >= wall.x && 
            player.x <= wall.x + wall.w && 
            player.y <= wall.y + wall.h){
            player.y = wall.y - player.r - 1;
            player.vY *= -0.5;
        }
        if(player.x - player.r <= wall.x + wall.w && 
        player.y >= wall.y &&
        player.y <= wall.y + wall.h &&
        player.x >= wall.x){
            player.x = wall.x + wall.w + player.r + 1;
            player.vX *= -0.5;
        }
        if(player.y - player.r <= wall.y + wall.h && 
            player.x >= wall.x && 
            player.x <= wall.x + wall.w && 
            player.y >= wall.y){
            player.vY *= -0.5;
        }
        if(bullets.length > 0){
            bullets.forEach((bullet, index) => {
                if(bullet.x + bullet.r >= wall.x &&
                    bullet.y <= wall.y + wall.h && 
                    bullet.y >= wall.y &&
                    bullet.x <= wall.x + wall.w){
                    //bullet.vX *= -1;
                    bullets.splice(index, 1);
                }
                if(bullet.y + bullet.r >= wall.y && 
                    bullet.x >= wall.x && 
                    bullet.x <= wall.x + wall.w && 
                    bullet.y <= wall.y + wall.h){
                    //bullet.vY *= -1;
                    bullets.splice(index, 1);
                }
                if(bullet.x - bullet.r <= wall.x + wall.w && 
                bullet.y >= wall.y &&
                bullet.y <= wall.y + wall.h &&
                bullet.x >= wall.x){
                    //bullet.vX *= -1;
                    bullets.splice(index, 1);
                }
                if(bullet.y - bullet.r <= wall.y + wall.h && 
                    bullet.x >= wall.x && 
                    bullet.x <= wall.x + wall.w && 
                    bullet.y >= wall.y){
                    //bullet.vY *= -1;
                    bullets.splice(index, 1);
                }
            });
        }
        if(ebullets.length > 0){
            ebullets.forEach((bullet, index) => {
                if(bullet.x + bullet.r >= wall.x &&
                    bullet.y <= wall.y + wall.h && 
                    bullet.y >= wall.y &&
                    bullet.x <= wall.x + wall.w){
                    //bullet.vX *= -1;
                    ebullets.splice(index, 1);
                }
                if(bullet.y + bullet.r >= wall.y && 
                    bullet.x >= wall.x && 
                    bullet.x <= wall.x + wall.w && 
                    bullet.y <= wall.y + wall.h){
                    //bullet.vY *= -1;
                    ebullets.splice(index, 1);
                }
                if(bullet.x - bullet.r <= wall.x + wall.w && 
                bullet.y >= wall.y &&
                bullet.y <= wall.y + wall.h &&
                bullet.x >= wall.x){
                    //bullet.vX *= -1;
                    ebullets.splice(index, 1);
                }
                if(bullet.y - bullet.r <= wall.y + wall.h && 
                    bullet.x >= wall.x && 
                    bullet.x <= wall.x + wall.w && 
                    bullet.y >= wall.y){
                    //bullet.vY *= -1;
                    ebullets.splice(index, 1);
                }
            });
        }
    });
}
function BulletCollision(){
    //console.log(ebullets);
    
    ebullets.forEach((bullet, index) => {
        let bdX = Math.abs(bullet.x - player.x);
        let bdY = Math.abs(bullet.y - player.y);
        let bDistence = Math.abs(Math.sqrt(Math.pow(bdX, 2) + Math.pow(bdY, 2)));
        
        if(bDistence <= player.r + bullet.r) {
            console.log("Hit!!!");
            ebullets.splice(index, 1);
            player.x = Math.random() * w;
            player.y = Math.random() * h;
        }
    });
}
function DrawEnemy(enemies){
    enemyList.forEach(enemyID => {
        context.beginPath();
        context.save();
        let cX = enemies[enemyID].x;
        let cY = enemies[enemyID].y;

        // Player Appearance //
        context.strokeStyle = enemies[enemyID].color;
        context.fillStyle = enemies[enemyID].color;
        context.font='15px Arial';

        // Draws Name //
        context.fillText(enemies[enemyID].name, enemies[enemyID].x, enemies[enemyID].y - enemies[enemyID].r - 5);

        // Rotates The Player //
        context.translate(cX, cY);
        context.rotate(Math.PI / 180 * enemies[enemyID].angle);
        context.translate(-cX, -cY);
        
        // Draws Circle //
        context.arc(enemies[enemyID].x, enemies[enemyID].y, enemies[enemyID].r, 0, Math.PI * 2, false);

        // Draws Gun //
        if(enemies[enemyID].gun == "pistol") context.fillRect(enemies[enemyID].x, enemies[enemyID].y - (10 / 2), 30, 10);
        
        // Draws Everything //
        context.fill();
        context.stroke();
        context.restore();
    });
    
    /*
    enemies.forEach((enemy, index) => {
        context.beginPath();
        context.save();
        let cX = enemy.x;
        let cY = enemy.y;

        // Player Appearance //
        context.strokeStyle = enemy.color;
        context.fillStyle = enemy.color;
        context.font='15px Arial';

        // Draws Name //
        context.fillText(enemy.name, enemy.x, enemy.y - enemy.r - 5);

        // Rotates The Player //
        context.translate(cX, cY);
        context.rotate(Math.PI / 180 * enemy.angle);
        context.translate(-cX, -cY);
        
        // Draws Circle //
        context.arc(enemy.x, enemy.y, enemy.r, 0, Math.PI * 2, false);

        // Draws Gun //
        if(enemy.gun == "pistol") context.fillRect(enemy.x, enemy.y - (10 / 2), 30, 10);
        
        // Draws Everything //
        context.fill();
        context.stroke();
        context.restore();
    });
    */
}

function DrawWalls(walls){
    walls.forEach(wall => {
        wall.Draw(context);
    });
}
function FireGun(){
    if(controls.ml == true){
        if(player.gun == "pistol"){
            
            bullets.push(new Bullet(player.x, player.y, Math.cos(player.angle * (Math.PI / 180)) * 8 * 1.5, Math.sin(player.angle * (Math.PI / 180)) * 8 * 1.5, 5, player.color, player.angle));
            console.log(bullets);
            bulletdata = {
                "x": Math.round(bullets[bullets.length - 1].x),
                "y": Math.round(bullets[bullets.length - 1].y),
                "vX": bullets[bullets.length - 1].vX,
                "vY": bullets[bullets.length - 1].vY,
                "r": bullets[bullets.length - 1].r,
                "color": bullets[bullets.length - 1].color
            }
            SendBulletData(bulletdata);
        }
    }
}


// All The EventListeners //
canvas.addEventListener('mousedown', (eve) => {controls.ml = true;});
canvas.addEventListener('mouseup', (eve) => {
    controls.ml = false;
});
canvas.addEventListener("mousemove", (eve) => {
    //let x = eve.clientX - ((bW - w) / 2);
    //let y = eve.clientY - ((bH - h) / 2);
    //controls.mX = eve.clientX;
    //controls.mY = eve.clientY;
    controls.mX = eve.clientX - ((bW - w) / 2);
    controls.mY = eve.clientY - ((bH - h) / 2);
    //console.log(controls.mX + "  |  " + controls.mY);
});
window.addEventListener("keydown", (eve) => {
    if(eve.key == "w") controls.w = true;
    if(eve.key == "a") controls.a = true;
    if(eve.key == "s") controls.s = true;
    if(eve.key == "d") controls.d = true;
});
window.addEventListener("keyup", (eve) => {
    if(eve.key == "w") controls.w = false;
    if(eve.key == "a") controls.a = false;
    if(eve.key == "s") controls.s = false;
    if(eve.key == "d") controls.d = false;
});
window.addEventListener("resize", (eve) => {
    bW = window.innerWidth;
    bH = window.innerHeight;
});