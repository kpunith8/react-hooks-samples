import React from "react";
import "./App.css";
import useCounter from "./components/use-counter-custom-hook";
import RefExample from "./components/ref-example";

const App = () => {
  const focusRef = React.useRef(null);

  // Using custom counter
  const { count, increment, reset } = useCounter(200);

  return (
    <div className="App">
      <button onClick={increment}>{count}</button>
      <br />
      <button onClick={reset}>Reset</button>

      <br />
      <br />

      <RefExample focusRef={focusRef} />
    </div>
  );
};

export default App;
