const apiKey="efeb9cf972abcb9d2d86a9f0df248587";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput= document.querySelector(".city-input");
const searchButton=document.querySelector(".search-btn");

async function checkWeather(city){
    const response = await fetch(apiUrl +  city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML =   data.name;
    document.querySelector(".temp").innerHTML = "Temperature : " + Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = "Wind : " + data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = "Humidity : " + data.main.humidity + "%";


}

searchButton.addEventListener("click", ()=>{
    checkWeather(cityInput.value);
})

