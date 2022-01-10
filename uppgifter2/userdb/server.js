const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
let users = JSON.parse(fs.readFileSync(__dirname + "/users.json"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public/"));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/simple_login");
const db = mongoose.connection;

db.on("open", (ex) => {
    if(ex) throw ex;
    console.log("Connected to database!");
});

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const Users = mongoose.model("usersModel", userSchema, "users");

app.post('/register', (req, res) => {
    let data = req.body;

    let user = new Users({
        username: data.txtUsername,
        email: data.txtEmail,
        password: data.txtPassword
    });
    Users.find({username: data.txtUsername}, (err, data) => {
        if(data.length == 0) user.save();
    });
    res.redirect("/");
});
app.post('/login', (req, res) => {
    let logindata = req.body;

    Users.find({username: logindata.txtUsername}, (err, data) => {
        if(data.length == 0){
            res.redirect("/");
        }else{
            if(data[0].password == logindata.txtPassword){
                res.redirect("/waow.html");
            }else{
                res.redirect("/");
            }
        }
    });
});

app.post('/delete', (req, res) => {
    let logindata = req.body;

    Users.find({username: logindata.txtUsername}, (err, data) => {
        if(data.length == 0){
            res.redirect("/");
        }else{
            if(data[0].password == logindata.txtPassword && data[0].email == logindata.txtEmail){
                Users.deleteOne({ username: logindata.txtUsername}, (err) => {
                    if (err) console.log(err);
                    console.log("Success");
                    res.redirect("/");
                });
            }else{
                res.redirect("/");
            }
        }
    });
});

app.post('/update', (req, res) => {
    let logindata = req.body;

    Users.find({username: logindata.txtUsername}, (err, data) => {
        if(data.length == 0){
            res.redirect("/");
        }else{
            if(data[0].password == logindata.txtPassword && data[0].email){
                Users.updateOne({username: logindata.txtUsername}, {username: logindata.txtNewUsername}, (err, docs) => {
                    if (err) console.log(err);
                    console.log("Updated Docs : ", docs);
                    res.redirect("/");
                });
            }else{
                res.redirect("/");
            }
        }
    });
});

app.listen(port);
console.log("Listening on port: " + port);