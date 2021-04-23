//Api to call several cities current weather data
var weather = 'https://api.openweathermap.org/data/2.5/find?lat=19.42851&lon=-99.1277&cnt=50&appid=957c48144e6613a3ab83fcb174cf1ad6';

console.log(weather);

//Fetch the information to print it then in the console
function searchApi() {
  fetch(weather)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          //Then we need to print the information
          var cities = document.getElementById("cities");

          //Loop through the information
          for(var i = 0; i < data.length; i++) {
            var list = document.createElement ("ul");
            cities.appendChild(list);
            var realWeather = document.createElement ("li");
            realWeather.textContent = i;
          }
        }
        )
      }
    }
    )
};



document
//Calling the function
searchApi();




