import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5)
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `bec049cdcofb5t08d94f2fc0c3440fa3`;
    let city = `San Diego`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }
}
