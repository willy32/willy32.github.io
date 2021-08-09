const lblTime = document.querySelector("#time");
const lblDate = document.querySelector("#date");
const chkbtnSound = document.querySelector("#chkbtnSound");
const audio = new Audio('./sounds/tick.mp3');

let time = {
    "h":0,
    "m":0,
    "s":0
};
let date = {
    "y":0,
    "m":0,
    "d":0
};

setInterval(() => {
    let d = new Date();

    time.h = d.getHours();
    time.m = d.getMinutes();
    time.s = d.getSeconds();

    date.y = d.getFullYear();
    date.m = d.getMonth() + 1;
    date.d = d.getDate();

    CheckZero();

    lblTime.innerText = time.h + ":" + time.m + ":" + time.s;
    console.log(time);

    lblDate.innerText = date.d + "." + date.m + "." + date.y;
    console.log(date);

    if(chkbtnSound.checked){
        audio.play();
    }
}, 1000);

function CheckZero() {
    if(time.h.toString().length < 2){
        time.h = "0" + time.h.toString();
    }
    if(time.m.toString().length < 2){
        time.m = "0" + time.m.toString();
    }
    if(time.s.toString().length < 2){
        time.s = "0" + time.s.toString();
    }
}