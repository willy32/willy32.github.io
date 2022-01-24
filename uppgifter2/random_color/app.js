const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnColor = document.getElementById("btnColor");
const lblColor = document.getElementById("lblColor");

btnColor.addEventListener("click", () => {
    let hexColor = GetRandomColor();

    lblColor.innerText = hexColor;
    lblColor.style.color = hexColor;

    document.body.style.backgroundColor = hexColor;
});

function GetRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

function GetRandomHex(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[GetRandomNumber()];
    }

    return hexColor;
}

function GetRandomColor(){
    let color = "rgb(";
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    color += r + "," + g + "," + b + ")";

    return color;
}