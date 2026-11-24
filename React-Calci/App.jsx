import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } 
    else if (value === "DEL") {
      setDisplay(display.slice(0, -1));
    } 
    else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } 
    else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "C", "DEL", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2>Simple Calculator</h2>

        <input
          type="text"
          value={display}
          readOnly
          placeholder="0"
        />

        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => handleClick(button)}
              className={
                button === "="
                  ? "equal"
                  : button === "C"
                  ? "clear"
                  : ""
              }
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;