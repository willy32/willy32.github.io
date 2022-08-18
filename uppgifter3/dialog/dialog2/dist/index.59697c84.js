const openButton = document.querySelector("#openButton");
const dialog = creatDialog(".dialog");
openButton.addEventListener("click", ()=>{
    dialog.open((result)=>{
        document.body.style.backgroundColor = result.submitter?.textContent.toLowerCase();
    });
});

//# sourceMappingURL=index.59697c84.js.map
