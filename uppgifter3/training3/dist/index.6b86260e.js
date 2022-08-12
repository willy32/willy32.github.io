let arr = [
    "Volvo",
    "BMW",
    "Honda"
];
DrawArray(arr);
function DrawArray(arr) {
    let list = document.getElementById("list");
    list.innerHTML = "";
    arr.forEach((element)=>{
        list.innerHTML += `<h3>${element}</h3>`;
    });
}
let buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        switch(button.textContent){
            case "Push":
                arr.push(document.getElementById("txtText").value);
                break;
            case "Unshift":
                arr.unshift(document.getElementById("txtText").value);
                break;
            case "Pop":
                arr.pop();
                break;
        }
        DrawArray(arr);
    });
});

//# sourceMappingURL=index.6b86260e.js.map
