// API key. Replace with your API key
const APIKEY = "745f9c853e816d0f7302882cff240965";
// City
const city = "Everett";
// Units for Farenheit
const unit = "imperial";

// URL query string
const urlQueryString = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&q=${city}&units=${unit}`;

console.log(urlQueryString);

// Using fetch to get data
fetch(urlQueryString)
  .then(( response ) => response.json())
  .then(( data ) => {
  
    // check-check
    console.log( data );
  
    // Get elements
    const city = document.querySelector("#city");
    const temp = document.querySelector("#temp");
    const icon = document.querySelector("img");
    const feel = document.querySelector("#feel");
    const humidity = document.querySelector("#humidity");
    const iconId = data.weather[0].icon;
  

    //set element
    city.textContent = data.name;
    temp.textContent = "✧ Temperature: " + Math.ceil(data.main.temp) + " ✧";
    feel.textContent = "✧ How It Feels: " + data.main.temp + " ✧";
    humidity.textContent = "✧ Humidity: " + data.main.humidity + " ✧";
    console.log(data.weather[0].icon);
    icon.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
  });

//Seond Phoenix

const APIKEY2 = "745f9c853e816d0f7302882cff240965";
const city2 = "Phoenix";
const unit2 = "imperial";
const urlQueryString2 = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY2}&q=${city2}&units=${unit2}`;

console.log(urlQueryString2);

fetch(urlQueryString2)
  .then(( response ) => response.json())
  .then(( data ) => {
    console.log( data );
  
  
    //Phoenix
    const city2 = document.querySelector("#city2");
    const temp2 = document.querySelector("#temp2");
    const icon2 = document.querySelector("img2");
    const feel2 = document.querySelector("#feel2");
    const humidity2 = document.querySelector("#humidity2");
    const iconId2 = data.weather[0].icon;

    //set element
    city2.textContent = data.name;
    temp2.textContent = "✦ Temperature: " + Math.ceil(data.main.temp) + " ✦";
    feel2.textContent = "✦ How it Feels: " + data.main.temp + " ✦";
    humidity2.textContent = "✦ Humidity: " + data.main.humidity + " ✦";
    console.log(data.weather[0].icon);
    icon.src  = `https://openweathermap.org/img/wn/${iconId2}@4x.png`
  });

