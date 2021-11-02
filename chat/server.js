const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

app.use(express.static(__dirname + "/public/"));

app.use(express.urlencoded({
    extended: true
}));

io.on('connection', (socket) => {
    console.log("A user connected");
    socket.on('chat_message', (msg) => {
        console.log(msg);
        io.emit("message",msg);
    });
});

server.listen(port, () => console.log("Listening on port " + port));
//app.listen(port, () => console.log("Listening on port " + port));