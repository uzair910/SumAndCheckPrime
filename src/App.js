// import axios from 'axios'
import React, { useEffect, useState, useRef } from "react";
import './App.css';


function App() {


  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const myContainer = useRef(null);
  // this.state = {
  //   result: []
  // }
  var sNumbers = "";

  function handleNumberSubmission(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      // concatenate to the numbers string
      sNumbers += e.target.value + ",";
      myContainer.current.innertext = sNumbers; // Not working
      myContainer.current.label.innertext = sNumbers;
      myContainer.current.text = sNumbers;
      // clear the text in the field.
      setValue("");
      console.log("Enter key was pressed. Run your function.");
    }
  }

  function handleTextChange(text) {
    const re = /^[0-9\b]+$/; // to allow just numeric values

    // if value is not blank, then test the regex
    if (re.test(text) || text === '') {
      setValue(text);
    }

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function CheckPrime(text) {

  }

  function calculateSumAndCheckPrime(text) {
    // axios.get('https://localhost:44331/api/MyAPI?action=sumandcheck&numbers=13,12,22,5')
    // .then(response => console.log(response))
  }
  return (
    <div className="App" >
      <form autoComplete="off">
        <header>
          <p>
            Sum and Prime
          </p>
        </header>
        <body>
          <div className="float-label">
            <input type="text"
              value={value}
              onChange={(e) => handleTextChange(e.target.value)}
              onKeyPress={(e) => handleNumberSubmission(e)}
            />

            <label className={isActive ? "Active" : ""} htmlFor="number">
              Enter a number
            </label>
          </div>

          <div>
            <button onClick={calculateSumAndCheckPrime}>Calculate sum</button>
            <button onClick={CheckPrime}>Check if Prime number</button>
          </div>
        </body>
      </form>
      <div>
        <label
          ref={myContainer}
        >output text
        </label>
      </div>
    </div>
  );
}

export default App;
