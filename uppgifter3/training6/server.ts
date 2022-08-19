import express, {Express, Request, response, Response} from "express";
import axios from "axios";
const app:Express = express();
app.use(express.static("public"))

app.get("/", (req:Request, res:Response) => {
    
});
app.get("/posts", (req:Request, res:Response) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        res.json(response["data"]);
    });
});
app.get("/posts/:id", (req:Request, res:Response) => {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((response) => {
        res.json(response["data"]);
    });
});


app.listen(3000, () => console.log("Listening on port 3000"));