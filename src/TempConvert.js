import React, { useState } from "react";

export default function TempConvert(props) {
  let [unit, setUnit] = useState("celcius");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celcius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span className="unit float-left">
        <h2 className="float-left">
          <img src={props.icon} alt="weather-icon" />
          {Math.round(props.fahrenheit)}°F |{" "}
          <a href="/" onClick={showCelcius} className="text-decoration-none">
            °C
          </a>
        </h2>
      </span>
    );
  } else {
    return (
      <span className="unit float-left">
        <h2 className="float-left">
          <img src={props.icon} alt="weather-icon" />
          {Math.round(celcius())}
          <a href="/" onClick={showFahrenheit} className="text-decoration-none">
            °F{" "}
          </a>
          | °C
        </h2>
      </span>
    );
  }
}
