import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="BtnContainer" style={{ backgroundColor: color }}>
      <div className="Btns">
        <button className="Red" onClick={() => setColor("red")}>Red</button>
        <button className="Green" onClick={() => setColor("green")}>Green</button>
        <button className="Blue" onClick={() => setColor("blue")}>Blue</button>
        <button className="Olive" onClick={() => setColor("olive")}>Olive</button>
        <button className="Yellow" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="Pink"onClick={() => setColor("pink")}>Pink</button>
        <button className="Purple" onClick={() => setColor("purple")}>Purple</button>
        <button className="Gray" onClick={() => setColor("gray")}>Gray</button>
      </div>
    </div>
  );
}

export default App;
