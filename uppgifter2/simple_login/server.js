const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;
let users = JSON.parse(fs.readFileSync(__dirname + "/users.json"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public/"));
app.use(express.json());

app.post('/register', (req, res) => {
    let data = req.body;
    console.log("---> /register");
    CheckExistingUser(data);    //Checks if there is already a user
    res.redirect("/");
});
app.post('/login', (req, res) => {
    let data = req.body;
    console.log("---> /login");
    console.log(CheckPassword(data));
    if(CheckPassword(data)){
        console.log("Redirecting");
        res.redirect("/waow.html");
    }
});
app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port);
console.log("Listening on port: " + port);

function CheckExistingUser(data){
    let exists = false;

    users.forEach((user, index) => {
        if(user.txtUsername == data.txtUsername){
            exists = true;
            return;
        }
    });
    if(!exists){
        users.push(data);
        fs.writeFileSync(__dirname + "/users.json", JSON.stringify(users, null, 2));
    }
}

function CheckPassword(data){
    let exists = false;
    let password = false;

    users.forEach((user, index) => {
        if(user.txtUsername == data.txtUsername){
            console.log(user.txtUsername + "==" + data.txtUsername);
            exists = true;
            if(user.txtPassword == data.txtPassword){
                console.log(user.txtPassword + "==" + data.txtPassword);
                password = true;
                return;
            }

            return;
        }
    });
    if(!exists){
        return false;
    }else{
       return password; 
    }
    
}