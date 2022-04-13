let weather = {
    "apiKey": "655158f89f2e058466d222adf5b4b216",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey +"")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".Description").innerText = description;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".Humidity").innerText = "Humidity : " + humidity +"%";
        document.querySelector(".Wind").innerText = "Wind speed : " +speed +" km/h";
        document.querySelector(".weather").classList.remove("loading");
    },    
    search: function() {
        this.fetchWeather(document.querySelector(".Search-bar").value);
    },
};

document.querySelector(".button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".Search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("New Delhi");