// api.openweathermap.org/data/2.5/weather?q={city name}&appid=8f372ffeeb6044b83f05f4346224fc00

var btn = document.querySelector("button");
var city = document.querySelector("input");
var weatherForecast = document.querySelector(".weather-forecast");
var infoForm = document.querySelector(".info-form");
var weatherDisplay = document.querySelector(".weather-display");

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

btn.addEventListener("click",function(){

    infoForm.classList.add("hidden-data");
    weatherDisplay.classList.remove("hidden-data")


    var targCity = "&q="+city.value.toString();
    var url = "https://api.openweathermap.org/data/2.5/weather?appid=8f372ffeeb6044b83f05f4346224fc00";
    var apiUrl = url + targCity; 


    fetch(apiUrl)
    .then(function(response){
        if(response.status !==200){
            throw Error;
        }
        return response.json();
    }).then(function(parsedData){
        console.log(parsedData);
    weatherForecast.innerText = parsedData.weather[0].description;

    }).catch(function(err){
        console.log(err);
    });

 



});