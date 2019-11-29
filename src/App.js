import React from "react";
import "./App.css";
import useCounter from "./Counter";
import RefExample from './Components/RefExample'

const App = () => {
  const focusRef = React.useRef(null);

  // Using custom counter
  const {count, increment, reset} = useCounter(200, focusRef);

  return (
    <div className="App">
      <button onClick={increment}>{count}</button>
      <br />
      <button onClick={reset}>Reset</button>

      <br />
      <br />

      <RefExample focusRef={focusRef}/>
    </div>
  );
};

export default App;
