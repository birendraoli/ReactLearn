import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const pwGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+=-~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    pwGenerator();
  }, [length, numberAllowed, charAllowed, pwGenerator]);

  return (
    <form className="pw-generator">
      <div className="pw-gen-content">
        <div className="pw-field">
          <input
            type="text"
            value={password}
            readOnly
            className="pw-show"
            ref={passwordRef}
          />
          <button className="copy-btn" onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="range-sec">
          <div>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length ({length})</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
