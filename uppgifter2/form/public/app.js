const txtText = document.querySelector("#txtText");

function FetchText(){
    let response = fetch("http://localhost:3000/users.json")
    .then(res => {
        let users = [];
        users = JSON.parse(res.statusText);
        console.log(res);
        //txtText.innerHTML = JSON.parse(res.statusText);
        users.forEach(element => {
            txtText.innerHTML += element.user + " | " + element.email + " | " + element.password + "\n";
        });
    });
    console.log(response);
}