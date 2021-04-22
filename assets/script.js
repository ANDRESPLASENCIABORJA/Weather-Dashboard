//Url for the weather i a variable


//Lets fetch the api and run it

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=957c48144e6613a3ab83fcb174cf1ad6')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });

