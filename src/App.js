import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="San Diego"/>

      <footer className="text-center">
        This project was coded by Belinda Amezquita and it is{" "}
        <a
          href="https://github.com/belindaam7/cutest-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open source
        </a>
        .
      </footer>
    </div>
  );
}
