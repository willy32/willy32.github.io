const lblInfo = document.querySelector("#lblInfo");
const lblTime = document.querySelector("#lblTime");

let targetDate = "01/01/2022";
lblInfo.innerText = "Time Until: " + targetDate;

let dTarget = new Date(targetDate);

let time = {
    "days":0,
    "hours":0,
    "minutes":0,
    "seconds":0
}

setInterval(() => {
    let d = new Date();

    let dateDiffernece = dTarget.getTime() - d.getTime();
    time.days = dateDiffernece / (1000 * 60 * 60 * 24);
    time.hours = (time.days - Math.floor(time.days)) * 24;
    time.minutes = (time.hours - Math.floor(time.hours)) * 60;
    time.seconds = (time.minutes - Math.floor(time.minutes)) * 60;

    time.days = Math.floor(time.days);
    time.hours = Math.floor(time.hours);
    time.minutes = Math.floor(time.minutes);
    time.seconds = Math.floor(time.seconds);

    CheckZero();

    lblTime.innerText = time.days + ":" +
        time.hours + ":" +
        time.minutes + ":" +
        time.seconds;
}, 1000);

function CheckZero(){
    if(time.hours.toString().length < 2){
        time.hours = "0" + (time.hours.toString());
    }
    if(time.minutes.toString().length < 2){
        time.minutes = "0" + (time.minutes.toString());
    }
    if(time.seconds.toString().length < 2){
        time.seconds = "0" + (time.seconds.toString());
    }
}