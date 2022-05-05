import React, { useEffect, useState } from "react";
import './App.css';


function App() {

  const [isActive, setIsActive] = useState(false);

  const [value, setValue] = useState('');

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <div className="App">
      <header>
        <p>
          Sum and Prime
        </p>
      </header>
      <body>
        <div className="float-label">
          <input type="email"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)} />
         
          <label className={isActive ? "Active" : ""} htmlFor="email">
            Enter a number
          </label>
        </div>
      </body>
    </div>
  );
}

export default App;
