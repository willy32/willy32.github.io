require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./config/controller');
const mongoose = require('mongoose');
const layout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

// Server Settings
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(layout);
app.use(express.static(__dirname + "/public/"));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use('/', router);

// Mongoose Connections
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('open', (err) => {
    if(err) throw err;
    console.log("Connected to MongoDB");
});

// Starts Server
const port = 3000;
app.listen(port, () => console.log("Listening on port: " + port));