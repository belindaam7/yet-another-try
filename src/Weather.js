import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [typeCity, setTypeCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      conditions: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchingCity();
  }

  function handleCityChange(event) {
    setTypeCity(event.target.value);
  }

  function searchingCity() {
    let apiKey = "bec049cdcofb5t08d94f2fc0c3440fa3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${typeCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container main-wrap my-5">
        <div className="Weather">
          <div className="container p-3">
            <div className="searchEngine">
              <div className="row p-2">
                <form onSubmit={handleSubmit}>
                  <input
                    className="searchbar col-9 ml-1"
                    type="search"
                    placeholder="Type a city here."
                    onChange={handleCityChange}
                  />
                  <input type="button" value="Search" className="btn col-2" />
                </form>
              </div>
              <WeatherInfo info={weatherData} />
              <WeatherForecast citySearched={weatherData.city} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    searchingCity();
    return `Loading..`;
  }
}
