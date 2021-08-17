const body = document.querySelector("body");

const txtRed = document.querySelector("#txtRed");
const txtGreen = document.querySelector("#txtGreen");
const txtBlue = document.querySelector("#txtBlue");

let red = parseInt(txtRed.value);
let green = parseInt(txtGreen.value);
let blue = parseInt(txtBlue.value);

txtRed.addEventListener("input", () => {
    red = parseInt(txtRed.value);
    if(red < 0){
        txtRed.value = "0";
        red = parseInt(txtRed.value);
    }
    if(red > 255){
        txtRed.value = "255";
        red = parseInt(txtRed.value);
    }
    ChangeBGColor(red, green, blue);
});
txtGreen.addEventListener("input", () => {
    green = parseInt(txtGreen.value);
    if(green < 0){
        txtGreen.value = "0";
        green = parseInt(txtGreen.value);
    }
    if(green > 255){
        txtGreen.value = "255";
        green = parseInt(txtGreen.value);
    }
    ChangeBGColor(red, green, blue);
});
txtBlue.addEventListener("input", () => {
    blue = parseInt(txtBlue.value);
    if(blue < 0){
        txtBlue.value = "0";
        blue = parseInt(txtBlue.value);
    }
    if(blue > 255){
        txtBlue.value = "255";
        blue = parseInt(txtBlue.value);
    }
    ChangeBGColor(red, green, blue);
});

function ChangeBGColor(red, green, blue){
    body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

ChangeBGColor(red, green, blue);