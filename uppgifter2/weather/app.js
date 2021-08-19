const imgIcon = document.querySelector("#imgIcon");
const lblTemp = document.querySelector("#lblTemp");
const lblCity = document.querySelector("#lblCity");

let city = "munsala"

fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=8069e8a3929480f3ac7275dfaedfae85")
.then(res => res.json())
.then(data => {
    Start(data);
});

function Start(weatherData){
    console.log(weatherData);
    let imgSource = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    imgIcon.src = imgSource;
    lblTemp.innerHTML = weatherData.main.temp + " °C";
    lblCity.innerHTML = city.toUpperCase() + " " + weatherData.sys.country;
}