const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
mongoose.connect("mongodb://localhost:27017/users");
const db = mongoose.connection;

db.on("open", (ex) => {
    if(ex) throw ex;
    console.log("Connected!");
});

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const Users = mongoose.model("usersModel", userSchema, "users");

const persons = {
    name: "John",
    email: "john@cunt.com",
    password: "1234567890"
}

const data = new Users({
    name: persons.name,
    email: persons.email,
    password: persons.password
});

data.save();


app.use(express.static(__dirname + "/public/"));

app.listen(port, () => console.log("Listening on port: " + port));