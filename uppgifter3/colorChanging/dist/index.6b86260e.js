const theBox = document.getElementById("theBox");
const colors = [
    "white",
    "black",
    "red",
    "lime",
    "blue"
];
let colorIndex = 0;
theBox.addEventListener("click", ()=>{
    theBox.style.backgroundColor = colors[++colorIndex % colors.length];
    console.log(colorIndex.toString() + " | " + (colorIndex % colors.length).toString());
});

//# sourceMappingURL=index.6b86260e.js.map
