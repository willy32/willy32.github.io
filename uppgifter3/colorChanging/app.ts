const theBox = document.getElementById("theBox");

const colors:string[] = ["white", "black", "red", "lime", "blue"];
let colorIndex:number = 0;

theBox.addEventListener("click", () => {
    theBox.style.backgroundColor = colors[++colorIndex % colors.length];
    console.log(colorIndex.toString() + " | " + (colorIndex % colors.length).toString());
    
});