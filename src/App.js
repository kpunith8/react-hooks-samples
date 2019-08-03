import React from "react";
import "./App.css";
import useCounter from "./Counter";

const App = () => {
  // Using custom counter
  const {count, increment, reset} = useCounter(200);

  return (
    <div className="App">
      <button onClick={increment}>{count}</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
