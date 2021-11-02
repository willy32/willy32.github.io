const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

app.use(express.static(__dirname + ('/public')));

io.on('connection', (socket) => {
    socket.on('playerdata', (data) => {
        socket.broadcast.emit('playerdata', data);
    });
    socket.on('bulletdata', (data) => {
        //console.log(data);
        socket.broadcast.emit('bulletdata', data);
    });
    socket.on('disconnect', () => {
        io.emit('disconnected', socket.id);
        console.log(socket.id + " has disconnected.");
    });
});

server.listen(port, () => console.log("Listening on port " + port));