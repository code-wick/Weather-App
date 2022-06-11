let now = new Date();
console.log(now);
let date = document.querySelector("#date");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
let month = months[now.getMonth()];
date.innerHTML = `Today is ${currentDay}, ${month}, ${hours}:${minutes},${year}`;

function showWeatherCondition(response) {
  let temperatureElement = document.querySelector("#tempature");
  let cityElement = document.querySelector("#city");
  let discriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  discriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
function search(city) {
  let units = "metric";
  let apiKey = "1250ee57d7591013d024f90dcae7bef4";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeatherCondition);
}

function searchLocation(position) {
  let apiKey = "1250ee57d7591013d024f90dcae7bef4";
  let apiUrl = `https:api.openweather.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentLocation(searchLocation);
}
function controlSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").ariaValueMax;
  search(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", controlSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
