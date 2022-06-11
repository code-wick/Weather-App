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

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}°F `;
}

function searchEngine(event) {
  event.preventDefault();
  let apiKey = "1250ee57d7591013d024f90dcae7bef4";
  let city = document.querySelector("#search-location").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

let searchInput = document.querySelector("#find-city");
searchInput.addEventListener("submit", searchEngine);
