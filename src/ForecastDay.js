import React from "react";
import axios from "axios";

export default function ForecastDay(props) {
  let icon = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;

  function tempMax() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function tempMin() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function dayOfWeek() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
          <div className="forecast-day">{dayOfWeek()}</div>
          <img src={icon} className="forecast-icon" />
          <div className="forecast-temps">
            <span className="forecast-temp-max">{tempMax()}</span> |{" "}
            <span className="forecast-temp-min">{tempMin()}</span>
          </div>
        </div>
  );
}
