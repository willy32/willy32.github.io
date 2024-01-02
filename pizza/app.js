const frmSend = document.querySelector("#frmSend");

frmSend.addEventListener("submit", (e) => {
    e.preventDefault();

    sendMessage(e.target["txtName"].value, e.target["txtMessage"].value);
});

async function sendMessage(name, message){
    const res = await fetch(`/admin/sendMessage.php?name=${name}&message=${message}`);
    const data = await res.json();
    console.log(data);
}

async function getMessages(){
    const res = await fetch(`/admin/getMessages.php`);
    const data = await res.json();
    console.log(data);
    return(data["data"])
}

async function renderMessages(){
    const messages = await getMessages();
    const divChat = document.querySelector("#chat");
    divChat.innerHTML = messages.map(message => (
        `
        <p>
            <span class="date">(${message["date"]})</span> <span class="name">${message["name"]}</span>: <span class="message">${message["message"]}</span>
        </p>
        `
    )).join("");
}

renderMessages();

const interval = setInterval(() => {
    renderMessages();
}, 1500)