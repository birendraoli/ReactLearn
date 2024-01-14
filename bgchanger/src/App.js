import "./App.css";
import { useState } from "react";

function App() {
  const [bgcolor, setBgColor] = useState("var(--bg-color)");
  const [maincolor, setMainColor] = useState("var(--main-color)")

  return (
    <div className="BtnContainer" style={{ backgroundColor: bgcolor, color: maincolor}}>test
      <div className="Btns">
        <button className="Red" onClick={() => setBgColor("red")}>Red</button>
        <button className="Green" onClick={() => setBgColor("green")}>Green</button>
        <button className="Blue" onClick={() => setBgColor("blue")}>Blue</button>
        <button className="Olive" onClick={() => setBgColor("olive")}>Olive</button>
        <button className="Yellow" onClick={() => setBgColor("yellow")}>Yellow</button>
        <button className="Pink"onClick={() => setBgColor("pink")}>Pink</button>
        <button className="Purple" onClick={() => setBgColor("purple")}>Purple</button>
        <button className="Gray" onClick={() => setBgColor("gray")}>Gray</button>
      </div>
    </div>
  );
}

export default App;
