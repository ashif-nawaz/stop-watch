import React, { useState } from "react";
import "./App.css";
let adjustInterval = undefined;
const App = () => {
  const [watch, setWatch] = useState(0);

  const startHandler = () => {
    if (adjustInterval) {
      clearInterval(adjustInterval);
    }
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
  };
  const stopHandler = () => {
    clearInterval(adjustInterval);
  };
  const resetHandler = () => {
    clearInterval(adjustInterval);
    setWatch(0);
  };
  return (
    <div>
      <h1>Stop watch</h1>
      <h2>{watch}</h2>
      <button onClick={startHandler} className="tip">
        Start
      </button>
      <button onClick={stopHandler} className="arm">
        Stop
      </button>
      <button onClick={resetHandler} className="due">
        Reset
      </button>
    </div>
  );
};
export default App;
