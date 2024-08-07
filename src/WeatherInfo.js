import React from "react";
import DateToday from "./DateToday";
import TempConvert from "./TempConvert";

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
      <div className="row weekly-weather">
        <div className="col-2">
          Wed <br />
          <br />
          <strong>82</strong>|61°F
        </div>
        <div className="col-2">
          Thur <br />
          <br />
          <strong>85</strong>|65°F
        </div>
        <div className="col-2">
          Fri <br />
          <br />
          <strong>87</strong>|66°F
        </div>
        <div className="col-2">
          Sat <br />
          <br />
          <strong>80</strong>|68°F
        </div>
        <div className="col-2">
          Sun <br />
          <br />
          <strong>77</strong>|61°F
        </div>
        <div className="col-2">
          Mon <br />
          <br />
          <strong>76</strong>|59°F
        </div>
      </div>
    </div>
  );
}
