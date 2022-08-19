import express, {Express, Request, Response} from "express";
const app:Express = express();

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!");
});
app.get("/posts", (req:Request, res:Response) => {
    res.send("Hello Porsts!");
});

app.listen(3000, () => console.log("Listening on port 3000"));