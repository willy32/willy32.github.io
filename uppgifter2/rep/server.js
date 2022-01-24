const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public/"));

mongoose.connect("mongodb://localhost:27017/book_collection");
const db = mongoose.connection;

db.on("open", (ex) => {
    if(ex) throw ex;
    console.log("Connected to the database!");
});

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: Number
});
const Book = mongoose.model("bookModel", bookSchema, "books");

app.get("/", (req, res) => {

});

app.get("/getBooks", (req, res) => {
    Book.find({}, (err, data) => {
        //console.log(data);
        res.json(data);
    });
});

app.post("/addBook", (req, res) => {
    let data = req.body;
    console.log(data);

    Book.find({title: data.txtTitle}, (err, bookData) => {
        console.log("Book: " + bookData + " - " + bookData.length);
        if(bookData == null || bookData.length == 0){
            let book = new Book({
                title: data.txtTitle,
                author: data.txtAuthor,
                pages: data.txtPages
            });
            book.save();
            res.redirect("/");
        }else{
            console.log("Book already exists.");
        }
    });
});
app.post("/deleteBook", (req, res) => {
    let data = req.body;
    console.log(data);

    Book.remove({title: data.txtTitle}, () => {
        console.log("Removing: " + data.title);
    });
    
    res.redirect("/");
});
app.post("/updateBook", (req, res) => {
    let data = req.body;
    console.log(data);

    Book.updateOne({title: data.txtTitle}, 
        {title:data.txtNewTitle, author:data.txtNewAuthor, pages:data.txtNewPages}, (err, docs) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Updated Docs : ", docs);
        }
    });

    res.redirect("/");
});

app.listen(port, () => console.log("Listening on port: " + port));