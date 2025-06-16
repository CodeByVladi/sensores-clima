const fetch = require("node-fetch");
const { openWeatherApiKey } = require("../config");

async function getRealWeather() {
  const city = "Guadalajara";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric&lang=es`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error fetching weather");
  const data = await res.json();
  return data.main.temp;
}

module.exports = { getRealWeather };
