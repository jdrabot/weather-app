var apiKey = "1cfba6dc832de74b8d22e5f7cc8acfd1";
var inputCity = document.getElementById("city-name");
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=$1cfba6dc832de74b8d22e5f7cc8acfd1&units=metric`;";
var cityName = document.getElementByClassName("city");
var cityTemp = documnet.getElementByClassName("temp");
var cityHumidity = document.getElementByClassName("humidity");
var cityWindSpeed = document.getElementByClassName("windspeed");
var cityUVIndex = document.getElementByClassName("uvindex");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputValue = inputCity.value;
});

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

        })
}