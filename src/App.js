// import axios from 'axios'
import React, { Component, useState, useRef } from "react";
import './App.css';
import ReactTooltip from "react-tooltip";
// import Tippy from "@tippy.js/react";
// import "tippy.js/dist/tippy.css";

function App() {

  // can we have one isActive for both text boxes?
  const [isActive, setIsActive] = useState(false);
  const [isEndpointActive, setIsEndpointActive] = useState(false);
  const [isPrimeButtonDisabled, setIsPrimeButtonDisabled] = useState(false);
  const [value, setValue] = useState('');
  const [endpoint, setEndpoint] = useState('')
  const [outputText, setOutputText] = useState('')
  // const [numbers, setNumbers] = useState('')
  const sNumbers = useRef('');

  function handleNumberSubmission(e) {
    if (e.target.value !== '' && (e.code === "Enter" || e.code === "NumpadEnter")) {
      // concatenate to the numbers string
      sNumbers.current = sNumbers.current + e.target.value + ",";

      console.log("sNumbers: " + sNumbers.current + " Length: " + sNumbers.current.split(',').length);

      // Disable CheckPrime button if numbers are more than 1.
      CheckPrimeButton();
      // clear the text in the field.
      setValue("");
    }
  }

  function CheckPrimeButton() {
    setOutputText(sNumbers.current);
    if (sNumbers.current.split(',').length === 2) {
      setIsPrimeButtonDisabled(false);
    } else {
      setIsPrimeButtonDisabled(true);
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

  function handleEndpointTextChange(text) {
    setEndpoint(text);
    if (text !== '') {
      setIsEndpointActive(true);
    } else {
      setIsEndpointActive(false);
    }
  }

  function CheckPrime(text) {
    console.log("CheckPrime, endpoint: " + endpoint);
  }

  function calculateSumAndCheckPrime(text) {
    // lets remove the , at the end..
    sNumbers.current = sNumbers.current.slice(0, -1);
    console.log("sNumbers before sum: " + sNumbers.current);

    if (endpoint === '') {
      console.log("No Endpoint given");
    } else {

      // axios.get(endpoint + '?action=sumandcheck&numbers=' +  sNumbers.current)
      // .then(response => console.log(response))
    }


  }

  return (
    <div className="App" >
      <header>
        <p>
          Sum and Prime
        </p>
      </header>

      <div className="float-label">
        <div className="float-label">
          <input type="text"
            value={endpoint}
            onChange={(e) => handleEndpointTextChange(e.target.value)}
          />
          <label className={isEndpointActive ? "Active" : ""} htmlFor="endpoint">
            Endpoint goes here
          </label>
        </div>
      </div>
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

        <button
          data-tip data-for='msgPrime'
          onClick={CheckPrime}
          onMouseLeave={() => {
            console.log("mouse leave")
          }}
          className={isPrimeButtonDisabled ? "Disabled" : ""}
          disabled={isPrimeButtonDisabled}>Check if Prime number</button>
        <ReactTooltip id='msgPrime' type='error'>
          <span>Cannot Check for prime number is there are more than 1 numbers entered</span>
        </ReactTooltip>
      </div>
      <div>
        <label
          value={outputText}>output text
        </label>
      </div>
    </div>
  );
}

export default App;
