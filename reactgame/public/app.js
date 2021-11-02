const body = document.querySelector('body');
const header = document.querySelector('h1');

var socket = io();
let playerState = "unready";
let addTime = 0;

body.addEventListener('click', () => {
    if(playerState == "unready"){
        Send("game", "ready|" + socket.id);
        playerState = "ready";
        body.style.backgroundColor = "#89CFF0";
        header.innerHTML = "Waiting for players";
    }
    if(playerState == "gameready"){
        addTime += 100;
    }
    if(playerState == "click"){
        Send("game", "click");
        playerState = "clicked";
        body.style.backgroundColor = "#89CFF0";
        header.innerHTML = "Waiting for results";
    }
});

socket.on('name', (data) => {
    let name = prompt(data);
    if(name == null){
        name = "I am a cunt and can't pick a name!";
    }
    Send('name', name.trim());
});

socket.on('game', (data) => {
    let command = data.split('|');

    if(command[0] == "alert"){
        alert(command[1]);
    }
    if(command[0] == "stage"){
        if(command[1] == "1"){
            playerState = "gameready";
            body.style.backgroundColor = "red";
            header.innerHTML = "Click when the screen turns green";
        }
        if(command[1] == "2"){
            setTimeout(() => {
                playerState = "click";
                body.style.backgroundColor = "#2bd834";
                header.innerHTML = "Click!!!";
            }, addTime);
            
        }
        if(command[1] == "3"){
            let leaderBoard = JSON.parse(command[2])

            playerState = "click";
            body.style.backgroundColor = "#89CFF0";
            header.innerHTML = "";
            leaderBoard.forEach(user => {
                header.innerHTML += user.name + ": " + user.time + "ms<br/>";
            });
            playerState = "unready";
        }
    }
});

function Send(channel, message){
    socket.emit(channel, message);
}