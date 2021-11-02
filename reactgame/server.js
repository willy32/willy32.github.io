const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000;

let players = {
    "count": 0,
    "readyCount": 0
};
let leaderBoard = [];
let time = new Date();
playerTimes = [];

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log(socket.id + " has connected");
    socket.emit('name', "Enter Your name: ");

    players[socket.id] = { "name": socket.id, "id": socket.id, "ready": false, "socket": socket};
    players.count++;

    socket.on('name', (data) => {
        players[socket.id].name = data;
    });

    socket.on('game', (data) => {
        let command = data.split('|');

        if(command[0] == "alert"){
            io.emit("game", command.join('|'));
        }
        if(command[0] == "ready"){
            players[socket.id].ready = true;
            players.readyCount++;
            console.log(players);
            
        }
        if(command[0] == "unready"){
            players[socket.id].ready = false;
            players.readyCount--;
            console.log(players);
        }
        if(command[0] == "click"){
            let d = new Date;
            d = d*1;
            leaderBoard.push(socket.id);
            playerTimes.push({ "id": socket.id, "time": Math.abs(d - time), "name": players[socket.id].name});
            players[socket.id].ready = false;
            players.readyCount--;
            console.log(playerTimes);
            socket.emit('game', "time|" + d + "|" + leaderBoard.length);
        }
    });
////////////////////////////////////////////////////
    socket.on('disconnect', () => {
        console.log(socket.id + " has disconnected");
        if(players[socket.id].ready == true){
            players.readyCount--;
        }
        delete players[socket.id];
        players.count--;
    });
});

server.listen(port, () => console.log("Listening on port " + port));

CheckReady();
function CheckReady(){
    let iv0 = setInterval(() => {
        if(players.readyCount == players.count && players.count != 0){
            Start();
            clearInterval(iv0);
            
        }
    }, 3000);
    return;
}


function Start(){
    io.emit('game', "stage|1");
    
    let iv2 = setTimeout(() => {
        io.emit('game', "stage|2");
        time = new Date();
        time = time*1;
        console.log(time);
        clearInterval(iv2);
    }, (Math.random() * 5 + 2) * 1000);
    let iv1 = setInterval(() => {
        if(players.readyCount == 0){
            io.emit('game', "stage|3|" + JSON.stringify(playerTimes));
            playerTimes = [];
            CheckReady();
            clearInterval(iv1);
        }
    }, 1000);
}