function run() {
    console.log("-------------------------------");
    console.log("Celsius: " + document.getElementById("txtCelsius").value);
    convert(document.getElementById("txtCelsius").value);
    
}
function convert(celsius) {
    var fahrenheit = celsius * 1.8 + 32;
    document.getElementById("output").innerHTML = fahrenheit;
    console.log("Fahrenheit: " + fahrenheit);
    console.log("The math: " + celsius + " * 1.8 + 32");
    console.log("-------------------------------");
}