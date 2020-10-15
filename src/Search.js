import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      Temperature: Math.round(response.data.main.temp),
      Description: response.data.weather[0].description,
      Wind: response.data.wind.speed,
      Humidity: response.data.main.humidity,
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1e2ce826268a3eec47d68f632fb9a68&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="Search" placeholder="Type a city..." onChange={updateCity} />
      <input type="Submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>The temperature: {weather.Temperature}ºC</li>
          <li>Description: {weather.Description}</li>
          <li>Humidity: {weather.Humidity}%</li>
          <li>Wind: {weather.Wind} km/h</li>
          <li>
            <img src={weather.Icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
