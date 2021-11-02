const form = document.querySelector("#form");
const txtName = document.querySelector("#txtName");
const txtMessage = document.querySelector("#txtContent");
const listMessages = document.querySelector("#listMessages");

var socket = io();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(txtMessage.value){
        let d = new Date();
        let dateSeconds = FixFormat(d.getSeconds());
        let dateMinutes = FixFormat(d.getMinutes());
        let dateHours = FixFormat(d.getHours());
        let date = dateHours + ":" + dateMinutes + ":" + dateSeconds; 
        
        socket.emit("chat_message", "[" + date + "] - " + txtName.value + "> " + txtMessage.value);
        txtMessage.value = "";
    }
});

socket.on('message', (msg) => {
    let node = document.createElement("li");
    node.innerHTML = msg;

    listMessages.appendChild(node);
});

function FixFormat(number){
    let stringedNumber = number.toString();
    console.log(stringedNumber);
    if(stringedNumber.length == 1){
        stringedNumber = "0" + stringedNumber;
    }
    return stringedNumber;
}