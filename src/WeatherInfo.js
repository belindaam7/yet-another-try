import React from "react";
import DateToday from "./DateToday";
import TempConvert from "./TempConvert";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="currentCity">{props.info.city}</h1>
          <ul>
            <li>
              <DateToday date={props.info.date} />, {props.info.conditions}
            </li>
            <li>
              Humidity: {props.info.humidity}% Wind:{" "}
              {Math.round(props.info.wind)}
              mph
            </li>
          </ul>
        </div>
        <div className="col-6 float-left">
          <TempConvert fahrenheit={props.info.temperature} icon={props.info.icon}/>
        </div>
      </div>
     <WeatherForecast />
      </div>
  );
}
