// Create a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
// Use the OpenWeather API to retrieve weather data for cities. The app will run in the browser and feature dynamically updated HTML and CSS.
// When I view the weather dashboard, I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index.
// When I view future weather conditions for that city, I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity.
// When I click on a city in the search history, I am again presented with current and future conditions for that city.



// Global Variables
var city = "";
var cityList = [];
var cityListEl = document.querySelector("#city-list");
var citySearchEl = document.querySelector("#city-search");
var citySearchFormEl = document.querySelector("#city-search-form");
var currentCityEl = document.querySelector("#current-city");
var currentTempEl = document.querySelector("#current-temp");
var currentHumidityEl = document.querySelector("#current-humidity");
var currentWindEl = document.querySelector("#current-wind");
var currentUvEl = document.querySelector("#current-uv");
var forecastEl = document.querySelector("#forecast");
var forecastDateEl = document.querySelector("#forecast-date");
var forecastTempEl = document.querySelector("#forecast-temp");
var forecastHumidityEl = document.querySelector("#forecast-humidity");
var forecastIconEl = document.querySelector("#forecast-icon");

// API Key
var apiKey = "c9b5b0b0b5b0b0b5b0b0b5b0b0b0b5b0";

// function to get the current weather



// function to get the forecast

// function to get the UV index

// function to get the city list

// function to save the city list

// function to render the city list

// function to render the current weather

// function to render the forecast

// function to render the UV index

// function to handle the search form submit

// function to handle the city list click

// function to handle the clear history button click

// function to handle the page load

// event listeners



// Create a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
// Use the OpenWeather API to retrieve weather data for cities. The app will run in the browser and feature dynamically updated HTML and CSS.
// When I view the weather dashboard, I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index.
// When I view future weather conditions for that city, I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity.
// When I click on a city in the search history, I am again presented with current and future conditions for that city.



// Global Variables
var city = "";
var cityList = [];
var cityListEl = document.querySelector("#city-list");
var citySearchEl = document.querySelector("#city-search");
var citySearchFormEl = document.querySelector("#city-search-form");
var currentCityEl = document.querySelector("#current-city");
var currentTempEl = document.querySelector("#current-temp");
var currentHumidityEl = document.querySelector("#current-humidity");
var currentWindEl = document.querySelector("#current-wind");
var currentUvEl = document.querySelector("#current-uv");
var forecastEl = document.querySelector("#forecast");
var forecastDateEl = document.querySelector("#forecast-date");
var forecastTempEl = document.querySelector("#forecast-temp");
var forecastHumidityEl = document.querySelector("#forecast-humidity");
var forecastIconEl = document.querySelector("#forecast-icon");


// API Key
var apiKey = "c9b5b0b0b5b0b0b5b0b0b5b0b0b0b5b0";



// Functions



// Function to get the current weather
function getCurrentWeather(city) {                                                                                          // Construct the API URL
  // Construct the API URL                                                                                                  
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;             // Make a request to the URL

  // Make a request to the URL
  fetch(apiUrl)                                                                                                             // Request was successful
    .then(function (response) {                                                                                              
      // Request was successful
      if (response.ok) {                                                                                                    // Parse the response as JSON
        response.json().then(function (data) {
          // Display the current weather
          displayCurrentWeather(data, city);                                                                                // Get the forecast
        });
      } else {
        alert("Error: " + response.statusText);                                                                             // Unable to connect to OpenWeather
      }
    })
    .catch(function (error) {                                                                                               // Unable to connect to OpenWeather                   
      alert("Unable to connect to OpenWeather");
    });
}

// Function to get the forecast
function getForecast(city) {                                                                                                // Construct the API URL
  // Construct the API URL
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;            // Make a request to the URL

  // Make a request to the URL
  fetch(apiUrl)                                                                                                             // Request was successful                                                                                                           
    .then(function (response) {
      // Request was successful
      if (response.ok) {
        response.json().then(function (data) {
          // Display the forecast
          displayForecast(data);
        });
      } else {                                                                                                              // Unable to connect to OpenWeather
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OpenWeather");
    });
}

// Function to display the current weather
function displayCurrentWeather(weather, searchCity) {                                                                           // Format the date
  // Format the date
  var currentDate = new Date(weather.dt * 1000);                                                                                // Convert the date to a string
  // Convert the date to a string
  currentDate = currentDate.toLocaleDateString();                                                                               // Create an image element
  // Create an image element
  var weatherIcon = document.createElement("img");                                                                              // Set the source attribute of the image
  // Set the source attribute of the image
  weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png");                     // Add the class of weather-icon to the image
  // Add the class of weather-icon to the image
  weatherIcon.setAttribute("class", "weather-icon");                                                                            // Append the image to the h3 element
  // Append the image to the h3 element
  currentCityEl.innerHTML = searchCity + " (" + currentDate + ") ";                                                             // Append the image to the h3 element
  // Append the image to the h3 element
  currentCityEl.appendChild(weatherIcon);                                                                                       // Convert the temperature to fahrenheit
  // Convert the temperature to fahrenheit
  var temperature = (weather.main.temp).toFixed(1);                                                                             // Display the temperature
  // Display the temperature
  currentTempEl.innerHTML = "Temperature: " + temperature + " &#176F";                                                          // Display the humidity
  // Display the humidity
  currentHumidityEl.innerHTML = "Humidity: " + weather.main.humidity + "%";                                                     // Display the wind speed
  // Display the wind speed
  currentWindEl.innerHTML = "Wind Speed: " + weather.wind.speed + " MPH";                                                       // Get the UV Index
  // Get the UV Index
  getUvIndex(weather.coord.lat, weather.coord.lon);                                                                             // Store the search history
  // Store the search history
  storeSearchHistory(searchCity);
}

// Function to get the UV Index
function getUvIndex(lat, lon) {                                                                                              // Construct the API URL
  // Construct the API URL
  var apiUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;                 // Make a request to the URL

  // Make a request to the URL
  fetch(apiUrl)                                                                                                             // Request was successful
    .then(function (response) {
      // Request was successful
      if (response.ok) {
        response.json().then(function (data) {
          // Display the UV Index
          displayUvIndex(data);
        });
      } else {                                                                                                              // Unable to connect to OpenWeather
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OpenWeather");
    });
}

// Function to display the UV Index
function displayUvIndex(index) {                                                                                             // Get the UV value
  // Get the UV value
  var uvValue = index.value;                                                                                                 // Display the UV value
  // Display the UV value
  currentUvEl.innerHTML = "UV Index: ";                                                                                       // Create a span element to hold the UV value
  // Create a span element to hold the UV value
  var uvSpan = document.createElement("span");                                                                                // Add a class to the span element
  // Add a class to the span element
  uvSpan.setAttribute("class", "badge badge-danger");                                                                         // Add the UV value to the span element
  // Add the UV value to the span element
  uvSpan.innerHTML = uvValue;                                                                                                 // Append the span element to the UV element
  // Append the span element to the UV element
  currentUvEl.appendChild(uvSpan);
}

// Function to display the forecast
function displayForecast(weather) {                                                                                           // Clear any old content
  // Clear any old content
  forecastEl.innerHTML = "";                                                                                                  // Set up a loop to create the forecast
  // Set up a loop to create the forecast
  for (var i = 0; i < weather.list.length; i++) {                                                                              // Only look at forecasts around 3:00pm
    // Only look at forecasts around 3:00pm
    if (weather.list[i].dt_txt.indexOf("15:00:00") !== -1) {                                                                   // Create the elements needed for a bootstrap card
      // Create the elements needed for a bootstrap card
      var colEl = document.createElement("div");                                                                               // Add a class of col to the div
      // Add a class of col to the div
      colEl.setAttribute("class", "col-md-2");                                                                                 // Create a card element
      // Create a card element
      var cardEl = document.createElement("div");                                                                              // Add a class of card to the div
      // Add a class of card to the div
      cardEl.setAttribute("class", "card bg-primary text-white");                                                              // Create the body element
      // Create the body element
      var cardBodyEl = document.createElement("div");                                                                          // Add a class of card-body to the div
      // Add a class of card-body to the div
      cardBodyEl.setAttribute("class", "card-body p-2");                                                                       // Create an h5 element for the date
      // Create an h5 element for the date
      var cardTitleEl = document.createElement("h5");                                                                          // Format the date
      // Format the date
      var cardDate = new Date(weather.list[i].dt * 1000);                                                                      // Convert the date to a string
      // Convert the date to a string
      cardDate = cardDate.toLocaleDateString();                                                                                // Set the content of the h5 element
      // Set the content of the h5 element
      cardTitleEl.innerHTML = cardDate;                                                                                        // Append the h5 element to the body element
      // Append the h5 element to the body element
      cardBodyEl.appendChild(cardTitleEl);                                                                                     // Create an image element
      // Create an image element
      var weatherIcon = document.createElement("img");                                                                         // Set the source attribute of the image
      // Set the source attribute of the image
        weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.list[i].weather[0].icon + ".png");       // Add the class of weather-icon to the image

        // Add the class of weather-icon to the image
        weatherIcon.setAttribute("class", "weather-icon");                                                                       // Append the image to the body element
        // Append the image to the body element
        cardBodyEl.appendChild(weatherIcon);                                                                                     // Create a p element for the temperature
        // Create a p element for the temperature
        var cardTempEl = document.createElement("p");                                                                            // Set the content of the p element
        // Set the content of the p element
        cardTempEl.innerHTML = "Temp: " + weather.list[i].main.temp_max + " &#176F";                                              // Append the p element to the body element
        // Append the p element to the body element
        cardBodyEl.appendChild(cardTempEl);                                                                                      // Create a p element for the humidity
        // Create a p element for the humidity
        var cardHumidityEl = document.createElement("p");                                                                        // Set the content of the p element
        // Set the content of the p element
        cardHumidityEl.innerHTML = "Humidity: " + weather.list[i].main.humidity + "%";                                            // Append the p element to the body element
        // Append the p element to the body element
        cardBodyEl.appendChild(cardHumidityEl);                                                                                  // Append the body element to the card element
        // Append the body element to the card element
        cardEl.appendChild(cardBodyEl);                                                                                          // Append the card element to the column element
        // Append the card element to the column element
        colEl.appendChild(cardEl);                                                                                               // Append the column element to the row element
        // Append the column element to the row element
        forecastEl.appendChild(colEl);
        }

    }
}

// Function to get the current weather
function getWeather(city) {                                                                                                   // Format the OpenWeather api url
  // Format the OpenWeather api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;                  // Make a request to the url
  // Make a request to the url
  fetch(apiUrl)                                                                                                               // Request was successful
    .then(function (response) {
      // Request was successful
      if (response.ok) {
        response.json().then(function (data) {
          // Display the current weather
          displayWeather(data, city);
        });
      } else {                                                                                                                // Unable to connect to OpenWeather
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OpenWeather");
    });
}

// Function to get the forecast
function getForecast(city) {                                                                                                  // Format the OpenWeather api url
  // Format the OpenWeather api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;                // Make a request to the url
  // Make a request to the url
  fetch(apiUrl)                                                                                                               // Request was successful
    .then(function (response) {
      // Request was successful
      if (response.ok) {
        response.json().then(function (data) {
          // Display the forecast
          displayForecast(data);
        });
      } else {                                                                                                                // Unable to connect to OpenWeather
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OpenWeather");
    });
}

// Function to get the UV index
function getUvIndex(lat, lon) {                                                                                               // Format the OpenWeather api url
  // Format the OpenWeather api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;                   // Make a request to the url
  // Make a request to the url
  fetch(apiUrl)                                                                                                               // Request was successful
    .then(function (response) {
      // Request was successful
      if (response.ok) {
        response.json().then(function (data) {
          // Display the UV index
          displayUvIndex(data);
        });
      } else {                                                                                                                // Unable to connect to OpenWeather
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OpenWeather");
    });
}

// Function to display the current weather
function displayWeather(weather, searchCity) {                                                                                // Clear the input value
  // Clear the input value
  cityInputEl.value = "";                                                                                                     // Clear the old content
  // Clear the old content
  weatherContainerEl.textContent = "";                                                                                        // Create a span element to hold the city name
  // Create a span element to hold the city name
  var cityEl = document.createElement("span");                                                                                // Add the city name to the span element
  // Add the city name to the span element
  cityEl.textContent = searchCity + " ";                                                                                      // Add the date to the span element
  // Add the date to the span element
  cityEl.textContent += "(" + moment().format("M/D/YYYY") + ") ";                                                             // Add the city name to the h1 element
  // Add the city name to the h1 element
  weatherContainerEl.appendChild(cityEl);                                                                                     // Create an image element
  // Create an image element
  var weatherIcon = document.createElement("img");                                                                            // Set the source attribute of the image
  // Set the source attribute of the image
  weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png");                   // Add the class of weather-icon to the image
  // Add the class of weather-icon to the image
  weatherIcon.setAttribute("class", "weather-icon");                                                                          // Append the image to the h1 element
  // Append the image to the h1 element
  weatherContainerEl.appendChild(weatherIcon);                                                                                // Create a span element to hold the temperature
  // Create a span element to hold the temperature
  var temperatureEl = document.createElement("span");                                                                         // Add the temperature to the span element
  // Add the temperature to the span element
  temperatureEl.textContent = "Temperature: " + weather.main.temp + " °F";                                                     // Add the temperature to the h3 element
  // Add the temperature to the h3 element
  weatherContainerEl.appendChild(temperatureEl);                                                                              // Create a span element to hold the humidity
  // Create a span element to hold the humidity
  var humidityEl = document.createElement("span");                                                                            // Add the humidity to the span element
  // Add the humidity to the span element
  humidityEl.textContent = "Humidity: " + weather.main.humidity + "%";

    // Add the humidity to the h3 element
    weatherContainerEl.appendChild(humidityEl);                                                                               // Create a span element to hold the wind speed
    // Create a span element to hold the wind speed
    var windSpeedEl = document.createElement("span");                                                                         // Add the wind speed to the span element
    // Add the wind speed to the span element
    windSpeedEl.textContent = "Wind Speed: " + weather.wind.speed + " MPH";                                                   // Add the wind speed to the h3 element
    // Add the wind speed to the h3 element
    weatherContainerEl.appendChild(windSpeedEl);                                                                              // Get the UV index
    // Get the UV index
    getUvIndex(weather.coord.lat, weather.coord.lon);                                                                         // Store the search city
    // Store the search city
    storeSearchCity(searchCity);
    }
    // Function to display the UV index
    function displayUvIndex(index) {                                                                                           // Create a span element to hold the UV index
      // Create a span element to hold the UV index
      var uvIndexEl = document.createElement("div");                                                                          // Add the class of list-item to the div
      // Add the class of list-item to the div
      uvIndexEl.setAttribute("class", "list-item");                                                                           // Add the text content to the div
      // Add the text content to the div
      uvIndexEl.textContent = "UV Index: ";                                                                                   // Add the UV index value to the span element
      // Add the UV index value to the span element
      uvIndexEl.innerHTML += "<span>" + index.value + "</span>";                                                              // Change the color depending on the value
      // Change the color depending on the value
      if (index.value < 3) {                                                                                                  // Add the favorable class to the span element
        // Add the favorable class to the span element
        uvIndexEl.children[0].setAttribute("class", "favorable");                                                             // Add the moderate class to the span element
        // Add the moderate class to the span element
      } else if (index.value < 7) {                                                                                           // Add the moderate class to the span element
        // Add the moderate class to the span element
        uvIndexEl.children[0].setAttribute("class", "moderate");                                                              // Add the severe class to the span element
        // Add the severe class to the span element
      } else {                                                                                                                // Add the severe class to the span element
        // Add the severe class to the span element
        uvIndexEl.children[0].setAttribute("class", "severe");                                                                // Add the UV index to the h3 element
        // Add the UV index to the h3 element
        weatherContainerEl.appendChild(uvIndexEl);                                                                            // Get the forecast
        // Get the forecast
        getForecast(cityInputEl.value.trim());
        }

        // Function to display the forecast
        function displayForecast(weather) {                                                                                   // Clear any old content
          // Clear any old content
          forecastContainerEl.textContent = " ";                                                                               // Set the header
          // Set the header
          forecastHeaderEl.textContent = "5-Day Forecast:";                                                                    // Loop over all forecasts (by 3-hour increments)
          // Loop over all forecasts (

            // Create the elements for a bootstrap card
            var forecastEl = document.createElement("div");                                                                    // Add the class of card to the div
            // Add the class of card to the div
            forecastEl.setAttribute("class", "card bg-primary text-light m-2");                                                // Create an element to have the date/time
            // Create an element to have the date/time
            var forecastDate = document.createElement("h5");                                                                   // Add the class of card-header to the h5 element
            // Add the class of card-header to the h5 element
            forecastDate.setAttribute("class", "card-header text-center");                                                     // Format the date/time
            // Format the date/time
            forecastDate.textContent = moment().add(i, "days").format("M/D/YYYY");                                             // Add the date/time to the h5 element
            // Add the date/time to the h5 element
            forecastEl.appendChild(forecastDate);                                                                              // Create an element for the icon
            // Create an element for the icon
            var forecastWeather = document.createElement("img");                                                               // Add the class of card-body to the div
            // Add the class of card-body to the div
            forecastWeather.setAttribute("class", "card-body text-center");                                                    // Set the icon source
            // Set the icon source
            forecastWeather.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.list[i].weather[0].icon + ".png"); // Add the icon to the div
            // Add the icon to the div
            forecastEl.appendChild(forecastWeather);                                                                           // Create an element to hold the temperature data
            // Create an element to hold the temperature data
            var forecastTempEl = document.createElement("span");                                                               // Add the class of card-text to the span
            // Add the class of card-text to the span
            forecastTempEl.setAttribute("class", "card-text");                                                                 // Add the temperature to the span
            // Add the temperature to the span
            forecastTempEl.textContent = weather.list[i].main.temp + " °F";                                                     // Add the temperature to the div
            // Add the temperature to the div
            forecastEl.appendChild(forecastTempEl);                                                                            // Create an element to hold the humidity data
            // Create an element to hold the humidity data
            var forecastHumidityEl = document.createElement("span");                                                           // Add the class of card-text to the span
            // Add the class of card-text to the span
            forecastHumidityEl.setAttribute("class", "card-text");                                                             // Add the humidity to the span
            // Add the humidity to the span
            forecastHumidityEl.textContent = weather.list[i].main.humidity + "%";                                               // Add the humidity to the div
            // Add the humidity to the div
            forecastEl.appendChild(forecastHumidityEl);                                                                        // Add the card to the forecast container
            // Add the card to the forecast container
            forecastContainerEl.appendChild(forecastEl);                                                                       // Add the forecast to the page
            // Add the forecast to the page
            forecastContainerEl.appendChild(forecastContainerEl);
            }
            



// Event Listeners

// Search button click event
searchButtonEl.addEventListener("click", formSubmitHandler);                                                                   // Search history button click event
// Search history button click event
searchHistoryEl.addEventListener("click", searchHistoryClickHandler);                                                          // Search history button click event







