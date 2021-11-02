const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public/"));

let users = [];

app.use(express.urlencoded({
    extended: true
}));

app.get('/users.json', (req, res) => {
    let text = "";
    fs.readFile('users.json', (err, data) => {
        res.statusMessage = data;
        res.send();
        res.end();
    });
    
});

app.post('/login', (req, res) => {
    let loginData = req.body;

    users.push(loginData);

    console.log("Username: " + loginData.user);
    console.log("Email: " + loginData.email);
    console.log("Password: " + loginData.password);

    fs.writeFile('users.json', JSON.stringify(users), (ex) => {
        if(ex) throw ex;
    });

    res.end();
});

app.listen(3000);