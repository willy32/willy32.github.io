const mongoose = require("mongoose");

const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public/"));
app.listen(port, () => console.log("Listening on port: " + port));

mongoose.connect("mongodb://localhost:27017/mongo1");
const db = mongoose.connection;

db.on("open", (ex) => {
    if(ex) throw ex;
    console.log("Connected to database!");
});

const userSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String
});
const Users = mongoose.model("usersModel", userSchema, "mongo1");

app.post("/register", (req, res) => {
    console.log(req.body);

    let user = new Users({
        username: req.body.txtUsername,
        email: req.body.txtEmail,
        password: req.body.txtPassword
    });
    user.save();
    res.redirect("/");
});