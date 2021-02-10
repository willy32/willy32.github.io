let gameSettings = {
    "boundsX": 1400,
    "boundsY": 900,
    "gameColor": "black",
    "scoreGap" : 10,
    "players": 2,
    "slide": 0.3,
    "failPossibility": 10, //1 in x

    "scoreColor": "#cccccc",

    "player1-color": "white",
    "player1-width": 20,
    "player1-height": 150,

    "player2-color": "white",
    "player2-width": 20,
    "player2-height": 150,

    "ball-color": "white",
    "ball-width": 20,
    "ball-height": 20,
}

////Setup////
const game = document.getElementById("game");
const score = document.getElementById("score");
const Score2 = document.getElementById("score2");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const ball = document.getElementById("ball");

let p1vY = 0;
let p1Y = gameSettings.boundsY / 2;
let p2vY = 0;
let p2Y = gameSettings.boundsY / 2;

let ballvX = 2;
let ballX = gameSettings.boundsX / 2;
let ballvY = 2;
let ballY = gameSettings.boundsY / 2;
let ballAccelerate = 1.0;
let rightWall = [0, 0];

let score1 = 0;
let score2 = 0;

let loop = setInterval(Loop, 5);
let colliotonRules = setInterval(CollitionRules, 5);
let moveEnemy;
let fail = Random(1, gameSettings.failPossibility);

game.style.width = gameSettings.boundsX + "px";
game.style.height = gameSettings.boundsY + "px";
game.style.color = gameSettings.gameColor;

score.style.color = gameSettings.scoreColor;

player1.style.color = gameSettings["player1-color"];
player1.style.width = gameSettings["player1-width"] + "px";
player1.style.height = gameSettings["player1-height"] + "px";
player1.style.left = gameSettings.scoreGap + "px";
player1.style.bottom = p1Y + "px";

player2.style.color = gameSettings["player2-color"];
player2.style.width = gameSettings["player2-width"] + "px";
player2.style.height = gameSettings["player2-height"] + "px";
player2.style.left = gameSettings.boundsX - gameSettings["player2-width"] - gameSettings.scoreGap + "px";
player2.style.bottom = p2Y + "px";

ball.style.color = gameSettings["ball-color"];
ball.style.width = gameSettings["ball-width"] + "px";
ball.style.height = gameSettings["ball-height"] + "px";
ball.style.left = ballX + "px";
ball.style.bottom = ballY + "px"

if(gameSettings.players == 1){
    document.addEventListener('wheel', Controls);
}
if(gameSettings.players == 2){
    document.addEventListener('wheel', Controls);
    document.addEventListener('keypress', Controls2);
    
    
}




function Controls(eve) {
    console.log(eve.deltaY);
    
    
    if(gameSettings.players == 1){
        p1vY += eve.deltaY * -0.2;
        p2vY += eve.deltaY * -0.2;
    }
    if(gameSettings.players == 2){
        p1vY += eve.deltaY * -0.2;
        
    }
}
function Controls2(eve) {
    console.log(eve.key);
    
    if(eve.key == 'w'){
        p2vY += -100 * -0.2
    }
    if(eve.key == 's'){
        p2vY += 100 * -0.2
    }
}


function Loop() {
    p1Y += p1vY;
    p1vY -= p1vY;

    player1.style.bottom = p1Y + "px";


    p2Y += p2vY;
    p2vY -= p2vY;

    player2.style.bottom = p2Y + "px";

    //Ball//
    ballX += ballvX;
    ball.style.left = ballX + "px";

    ballY += ballvY;
    ball.style.bottom = ballY + "px";

    //Score//
    score.innerHTML = score1;
    Score2.innerHTML = score2;
}

function CollitionRules() {
    if(ballY + gameSettings["ball-height"] >= gameSettings.boundsY || ballY <= 0){
        ballvY *= -1;
    }
    if(p1Y <= 0){
        p1Y = 0;
    }
    if(p2Y <= 0){
        p2Y = 0;
    }


    if((ballX <= gameSettings.scoreGap + gameSettings["player1-width"] && ballX >= gameSettings.scoreGap && ballY >= p1Y && ballY <= p1Y + gameSettings["player1-height"]) || (ballX >= gameSettings.boundsX - gameSettings.scoreGap - gameSettings["player2-width"] - gameSettings["ball-width"] && ballX <= gameSettings.boundsX - gameSettings["ball-width"] - gameSettings["player2-width"] && ballY >= p2Y && ballY <= p2Y + gameSettings["player2-height"])){
        ballvX *= -1 * ballAccelerate;
        if(gameSettings.players == 1){
            score1++;
        }
        if(ballX < gameSettings.boundsX / 2){
            clearInterval(moveEnemy);
            setTimeout(BallTracker, 10);
            fail = Random(1, gameSettings.failPossibility);
            moveEnemy = setInterval(MoveEnemy, 10);
        }
    }


    if(ballX < 0){
        if(gameSettings.players == 1){
            score1 = 0;
        }
        if(gameSettings.players == 2){
            score2++;
        }
        ballX = gameSettings.boundsX / 2;
        ballY = gameSettings.boundsY / 2;
    }
    if(ballX > gameSettings.boundsX){
        if(gameSettings.players == 1){
            score1 = 0;
        }
        if(gameSettings.players == 2){
            score1++;
        }
        ballX = gameSettings.boundsX / 2;
        ballY = gameSettings.boundsY / 2;
        clearInterval(moveEnemy);
        setTimeout(BallTracker, 10);
        fail = Random(1, gameSettings.failPossibility);
        moveEnemy = setInterval(MoveEnemy, 10);
    }

    


    if(p1Y >= gameSettings.boundsY - gameSettings["player1-height"]){
        p1Y = gameSettings.boundsY - gameSettings["player1-height"];
    }
    if(p2Y >= gameSettings.boundsY - gameSettings["player2-height"]){
        p2Y = gameSettings.boundsY - gameSettings["player2-height"];
    }
}

function BallTracker() {
    rightWall = [0, 0];
    let tempX = ballX;
    let tempY = ballY;
    let tempvX = ballvX;
    let tempvY = ballvY;

    while(rightWall[1] == 0){
        tempX += tempvX;
        tempY += tempvY;

        if(tempY + gameSettings["ball-height"] >= gameSettings.boundsY || tempY <= 0){
            tempvY *= -1;
        }

        if(tempX > gameSettings.boundsX){
            if(gameSettings.players == 2){
                rightWall = [tempX, tempY];
                console.log(rightWall);
            }
        }
    }
    
}

function MoveEnemy() {

    if(fail != 1){
        p2vY = 100 * 0.2 * Math.sign(rightWall[1] - (p2Y + gameSettings["player2-height"] / 2));
        if(rightWall[1] < p2Y + gameSettings["player2-height"] - gameSettings["player2-height"] / 6 && rightWall[1] > p2Y + gameSettings["player2-height"] / 6){
            clearInterval(moveEnemy);
        }
    }else{
        
        
        clearInterval(moveEnemy);
    }
    

    
}

function FixPX(arg) {
    return parseInt(arg.replace("px", ""))
}

function Random(min, max){
    return Math.round(Math.random() * (max -min) + min);
}