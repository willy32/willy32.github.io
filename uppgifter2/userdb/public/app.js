//const txtUsers = document.querySelector("#users");
/*
fetch("http://localhost:3000/users", {
    method: 'GET',
    headers : {
        'Content-Type': 'application/json'
    }
})
.then(res=>res.json())
.then(data=>{

    console.log(data);
    txtUsers.innerHTML = "";
    for(items of data) {
        let userDiv = document.createElement('div');
        let userText = document.createElement('h2');
        let email = document.createElement('h2');
        let passwordText = document.createElement('h2');

        userText.innerText = "Username: " + items.txtUsername;
        email.innerText = "E-mail: " + items.txtEmail;
        passwordText.innerText = "Password: " + items.txtPassword;

        userDiv.appendChild(userText);
        userDiv.appendChild(email);
        userDiv.appendChild(passwordText);

        txtUsers.appendChild(userDiv);
    };
});
*/