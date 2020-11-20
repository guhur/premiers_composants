import React from "react";
import Map from "./components/map/Map";
import Timer from "./components/timer/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Depuis combien de temps suis-je sur cette page ?</h1>
      <h2>
        <Timer /> secondes
      </h2>
      <Map center={{ lat: 45.1885, lng: 5.7245 }} />
    </div>
  );
}

export default App;
