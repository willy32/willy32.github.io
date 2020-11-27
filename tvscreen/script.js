var dvd = document.getElementById("image");
const dvdStartX = 30;
const dvdStartY = 30;
let dvdX = dvdStartX;
let dvdY = dvdStartY;
let loopOn = false;

dvd.style.left = dvdStartX + "px";
dvd.style.bottom = dvdStartY + "px";

function start(){
    loopOn = true;
}
function stop(){
    loopOn = false;
}

function moveX(x) {
    dvd.style.left = dvdX + x + "px";
    dvdX = dvdX + x;
}
function moveY(y) {
    dvd.style.bottom = dvdY + y + "px";
    dvdY = dvdY + y;
}


while(loopOn == true){

}