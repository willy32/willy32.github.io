const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

const W = 1000;
const H = 800;
canvas.width = W;
canvas.height = H;

let mouse = {
    "left": false,
    "right": false,
    "x": 0,
    "y": 0,
    "cx": 0,
    "cy": 0,
    "ctrl": false,
    "shift": false,
};

// Import All Classes
import {GolfBall} from "./golfBall.js";
import { Wall } from "./wall.js";

// Game Settings
let loopOn = true;
let currentLevel = levels[0];
console.log("Level Selected: " + 0 + " - " + currentLevel.levelName);
let player = new GolfBall(50, 50, 0, 0, 3.19, 10, 10, "red", "Willy", []);
let wall = new Wall(25, 300, 100, 25, 0, 0, "black", [player]);

let lastfps = 0;

function Loop(fps){
    if(fps - lastfps < 1000 / 60 || !loopOn){
        requestAnimationFrame(Loop);
        return;
    }
    Update();
    Draw(context);

    lastfps = fps
    requestAnimationFrame(Loop);
}

function Update(){
    wall.Update();
    player.Update();
}
function Draw(context){
    context.clearRect(0, 0, W, H);
    player.Draw(context);
    wall.Draw(context);

    if(mouse.left /*&& player.vX == 0 && player.vY == 0*/){
        context.beginPath();
        context.arc(mouse.cx, mouse.cy, player.r, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(player.x, player.y);
        context.lineTo(player.x - (mouse.x - mouse.cx), player.y - (mouse.y - mouse.cy));
        context.stroke();
        context.closePath();
    }
}
requestAnimationFrame(Loop);

canvas.addEventListener("mousemove", (eve) => {
    mouse.x = eve.offsetX;
    mouse.y = eve.offsetY;
});

canvas.addEventListener("mousedown", (eve) => {
    mouse.cx = eve.offsetX;
    mouse.cy = eve.offsetY;
    mouse.left = true;
    mouse.ctrl = eve.ctrlKey;
    mouse.shift = eve.shiftKey;
});

canvas.addEventListener("mouseup", (eve) => {
    mouse.left = false;
    mouse.ctrl = false;
    mouse.shift = false;

    let dx = mouse.x - mouse.cx;
    let dy = mouse.y - mouse.cy;

    //if(player.vX == 0 && player.vY == 0){
        player.vX -= dx * 0.05;
        player.vY -= dy * 0.05;
    //}
});