const lblVisited = document.querySelector("#lblVisited");

let timesVisited = localStorage.getItem("timesVisited");
if(timesVisited == null){
    timesVisited = 0;
}
timesVisited = parseInt(timesVisited);

localStorage.setItem("timesVisited", timesVisited + 1);
console.log(localStorage);

lblVisited.innerHTML = "You have visited this site " + localStorage.getItem("timesVisited") + " time(s)."