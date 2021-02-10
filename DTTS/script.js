console.log("Start");

let playerSettings = {
    "width": 70,
    "height": 70,
    "jumpHeight": 2, 

    "color": "red",
};
let gameSettings = {
    "boundsX": 1920,
    "boundsY": 1080,

    "gap": 420,

    "color": "grey",
};
let spikeSettings = {
    "width": 20,
    "color": "red",
};

let player = document.getElementById("player");
let player2 = document.getElementById("player2");
let game = document.getElementById("game");
let clearL = document.getElementById("clearLeft");
let clearR = document.getElementById("clearRight");
let spikeL = document.getElementById("spikeLeft");
let spikeR = document.getElementById("spikeRight");

let vX = 1;
let vY = 0;
let vX2 = 1;
let vY2 = 0;
let gravityVelocity = 0.5;

let X = gameSettings.boundsX / 2;
let Y = 600;
let X2 = gameSettings.boundsX / 2;
let Y2 = 400;

let gapLeft = Math.round(Math.random() * (gameSettings.boundsY - gameSettings.gap));
let clearLeft = [gapLeft, gapLeft + gameSettings.gap]
let gapRight = Math.round(Math.random() * (gameSettings.boundsY - gameSettings.gap));
let clearRight = [gapRight, gapRight + gameSettings.gap]
console.log(clearLeft + "\n" + clearRight);


player.style.width = playerSettings.width + "px";
player.style.height = playerSettings.height + "px";

player2.style.width = playerSettings.width + "px";
player2.style.height = playerSettings.height + "px";
//player.style.color = playerSettings.color;

game.style.width = gameSettings.boundsX + "px";
game.style.height = gameSettings.boundsY + "px";
game.style.backgroundColor = gameSettings.color;

spikeL.style.width = spikeSettings.width + "px";
spikeL.style.height = gameSettings.boundsY + "px";
spikeL.style.backgroundColor = spikeSettings.color;
spikeL.style.left = 0 + "px";

spikeR.style.width = spikeSettings.width + "px";
spikeR.style.height = gameSettings.boundsY + "px";
spikeR.style.backgroundColor = spikeSettings.color;
spikeR.style.top = 0 + "px";
spikeR.style.right = 0 + "px";

DrawClearLeft();
DrawClearRight();

document.addEventListener('keypress', (eve) => {
    console.log(eve.key);
    if(eve.key == "w"){
        Jump(1);
    }
    if(eve.key == "i"){
        Jump(2);
    }
});

let gravity = setInterval(Gravity, 5);
let collitionRules = setInterval(CollitionRules, 5);

function Gravity() {
    vY += gravityVelocity * 0.05;

    Y -= vY;
    X += vX;
    player.style.bottom = Y + "px";
    player.style.left = X + "px";

    vY2 += gravityVelocity * 0.05;

    Y2 -= vY2;
    X2 -= vX2;
    player2.style.bottom = Y2 + "px";
    player2.style.left = X2 + "px";

    console.log(player.style.top);
}

function Jump(arg) {
    if(arg == 1){
        vY = -1 * playerSettings.jumpHeight;
    }
    if(arg == 2){
        vY2 = -1 * playerSettings.jumpHeight;
    }
}

function CollitionRules() {
    if(FixPX(player.style.bottom) <= 0 || FixPX(player.style.bottom) >= gameSettings.boundsY - playerSettings.height){
        clearInterval(gravity);
    }
    if (FixPX(player.style.left) <= 0 || FixPX(player.style.left) >= gameSettings.boundsX - playerSettings.width) {
        vX *= -1;
    }
    if((FixPX(player.style.bottom) < clearLeft[0] || FixPX(player.style.bottom) + playerSettings.height > clearLeft[1]) && FixPX(player.style.left) <= 20){
        clearInterval(gravity);
    }
    else if((!FixPX(player.style.bottom) < clearLeft[0] || !FixPX(player.style.bottom) + playerSettings.height > clearLeft[1]) && FixPX(player.style.left) <= 10){
        setTimeout(RandomLeft, 1000);
    }
    if((FixPX(player.style.bottom) < clearRight[0] || FixPX(player.style.bottom) + playerSettings.height > clearRight[1]) && FixPX(player.style.left) >= gameSettings.boundsX - playerSettings.width - 20){
        clearInterval(gravity);
    }
    else if((!FixPX(player.style.bottom) < clearRight[0] || !FixPX(player.style.bottom) + playerSettings.height > clearRight[1]) && FixPX(player.style.left) >= gameSettings.boundsX - playerSettings.width - 10){
        setTimeout(RandomRight, 1000);
    }



    if(FixPX(player2.style.bottom) <= 0 || FixPX(player2.style.bottom) >= gameSettings.boundsY - playerSettings.height){
        clearInterval(gravity);
    }
    if (FixPX(player2.style.left) <= 0 || FixPX(player2.style.left) >= gameSettings.boundsX - playerSettings.width) {
        vX2 *= -1;
    }
    if((FixPX(player2.style.bottom) < clearLeft[0] || FixPX(player2.style.bottom) + playerSettings.height > clearLeft[1]) && FixPX(player2.style.left) <= 20){
        clearInterval(gravity);
    }
    else if((!FixPX(player2.style.bottom) < clearLeft[0] || !FixPX(player2.style.bottom) + playerSettings.height > clearLeft[1]) && FixPX(player2.style.left) <= 10){
        setTimeout(RandomLeft, 1000);
    }
    if((FixPX(player2.style.bottom) < clearRight[0] || FixPX(player2.style.bottom) + playerSettings.height > clearRight[1]) && FixPX(player2.style.left) >= gameSettings.boundsX - playerSettings.width - 20){
        clearInterval(gravity);
    }
    else if((!FixPX(player2.style.bottom) < clearRight[0] || !FixPX(player2.style.bottom) + playerSettings.height > clearRight[1]) && FixPX(player2.style.left) >= gameSettings.boundsX - playerSettings.width - 10){
        setTimeout(RandomRight, 1000);
    }

    if(FixPX(player.style.bottom) >= FixPX(player2.style.bottom) && FixPX(player.style.bottom) <= FixPX(player2.style.bottom) + playerSettings.height){
        if(FixPX(player.style.left) >= FixPX(player2.style.left) && FixPX(player.style.left) <= FixPX(player2.style.left) + playerSettings.width){
            clearInterval(gravity);
            console.log("true");
        }
        
    }
}


function DrawClearLeft(){
    clearL.style.backgroundColor = "lime";
    clearL.style.height = gameSettings.gap + "px";
    clearL.style.bottom = clearLeft[0] + "px";
}
function RandomLeft() {
    gapLeft = Math.round(Math.random() * (gameSettings.boundsY - gameSettings.gap));
    clearLeft = [gapLeft, gapLeft + gameSettings.gap]
    console.log(clearLeft + "\n" + clearRight);
    DrawClearLeft();
}

function DrawClearRight(){
    clearR.style.backgroundColor = "lime";
    clearR.style.height = gameSettings.gap + "px";
    clearR.style.bottom = clearRight[0] + "px";
    clearR.style.right = 0 + "px";
}
function RandomRight() {
    gapRight = Math.round(Math.random() * (gameSettings.boundsY - gameSettings.gap));
    clearRight = [gapRight, gapRight + gameSettings.gap];
    console.log(clearLeft + "\n" + clearRight);
    DrawClearRight();
}

function FixPX(data) {
    return parseInt(data.replace("px", ""));
}