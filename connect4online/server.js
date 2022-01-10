const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

app.use(express.static(__dirname + ('/public')));

let players = [];
let spectators = [];
//Board Settings:
let board = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
let turn = 0;

io.on('connection', (socket) => {
    
    if(players.length < 2){
        players.push(socket.id);
    }
    else {
        spectators.push(socket.id);
    }

    console.log(socket.id + " has connected.");
    console.log("Players:" + players);
    console.log("Spectators: " + spectators);

    socket.on('disconnect', () => {
        players.forEach((player, index) => {
            if(player == socket.id){
                players.splice(index, 1);
                if(spectators.length > 0){
                    players.push(spectators[0]);
                    spectators.shift();
                }
            }
        });
        spectators.forEach((spectator, index) => {
            if(spectator == socket.id){
                spectators.splice(index, 1);
            }
        });
        console.log(socket.id + " has disconnected.");
        console.log("Players:" + players);
        console.log("Spectators: " + spectators);
    });
});

server.listen(port, () => console.log("Listening on port " + port));

function ResetBoard(){
    board = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    turn = 0;
}