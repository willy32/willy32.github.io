const lblMessages = document.getElementById("messages");

PrintMessages();

setInterval(PrintMessages, 2000);

function PrintMessages(){
    fetch("/getChat", {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        WriteMessages(data);
    });
}

function WriteMessages(messages = []){
    lblMessages.innerHTML = "";

    messages.forEach(message => {
        let node = document.createElement("p");
        node.innerHTML = message.name + ": " + message.message;
        lblMessages.appendChild(node);
    });
}