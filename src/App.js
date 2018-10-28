import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button onClick={updateCount}>{count}</button>
    </div>
  );
}


export default App;
