import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Sunday 16:00",
    temperature: 19,
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/03d@2x.png",
    humidity: 50,
    wind: 6,
  };
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated:
              <span>{weatherData.date}</span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="unit">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" className="fahrenheit">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
