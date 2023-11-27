import { useState } from "react";
import "./App.css";

function App() {
  
  let [counter, setCounter] = useState(0)
  // let counter = 0

  const addValue = () => {
    // counter = counter + 1
    if(counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <div className="counter-section">
        <div className="counter-content">
          <h1>Counter</h1>
          <h2>Counter Value: {counter}</h2>

          <button onClick={addValue}>Add</button>
          <button onClick={removeValue}>Remove</button>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
