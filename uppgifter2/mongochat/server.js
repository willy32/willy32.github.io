const mongoose = require("mongoose");

const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public/"));
app.listen(port, () => console.log("Listening on port: " + port));

mongoose.connect("mongodb://localhost:27017/MongoChat");
const db = mongoose.connection;

db.on("open", (ex) => {
    if(ex) throw ex;
    console.log("Connected to database!");
});

const msgSchema = mongoose.Schema({
    name: String,
    message: String
});
const Messages = mongoose.model("msgModel", msgSchema, "messages");

app.post("/chat", (req, res) => {
    console.log(req.body);

    let message = new Messages({
        name: req.body.txtName,
        message: req.body.txtMessage
    });
    message.save();
    res.redirect("/");
});

app.get("/getChat", (req, res) => {
    Messages.find({}, (err, data) => {
        res.json(data);
    });
});