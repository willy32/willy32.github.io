const boxBooks = document.getElementById("boxBooks");

fetch('/getBooks')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(book => {
            let node = document.createElement("h2");
            node.innerHTML = book.title + " - " + book.author + " - " + book.pages;
            boxBooks.appendChild(node);
        });
    });