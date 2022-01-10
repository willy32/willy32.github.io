const prompt = require('prompt-sync')();
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public/"));

app.get('/connected', (req, res) => {
    
});

app.listen(port, () => console.log("Listening on port: " + port));