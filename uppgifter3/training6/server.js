"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
});
app.get("/posts", (req, res) => {
    axios_1.default.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
        res.json(response["data"]);
    });
});
app.get("/posts/:id", (req, res) => {
    axios_1.default.get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
        .then((response) => {
        res.json(response["data"]);
    });
});
app.listen(3000, () => console.log("Listening on port 3000"));
