import React from "react";
import logo from "./logo.svg";
import Map from "./components/map/Map";
import Timer from "./components/timer/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer />
      {
        //<Map center={ { lat: 45.1885, lng: 5.7245} } />
      }
    </div>
  );
}

export default App;
