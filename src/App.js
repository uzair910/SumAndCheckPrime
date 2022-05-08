import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ACTION_SUMANDCHECK, API_HOST } from './config';
import React, { useState } from "react";
import './App.css';

function App() {
  const [outputText, setOutputText] = useState('Start entering numbers..');
  const [outputClassName, setoutputClassName] = useState('bg-info');
  const [minIntegerValue] = useState(-2147483648);// If invalid string is parsed to server, the server will return int.minvalue (-2147483648)

  function handleNumberSubmission(e) {
    if (e.target.value !== '') {
      calculateSumAndCheckPrime(e.target.value);
    } else {
      setoutputClassName('bg-info');
      setOutputText('Start entering numbers..');
    }
  }

  function calculateSumAndCheckPrime(number) {
    axios.get(`${API_HOST}/MyAPI`, {
      params: {
        'action': ACTION_SUMANDCHECK,
        'sNumbers': number
      }
    })
      .then(function (response) {
        setOutputText(`${response.data.result > minIntegerValue ? "Sum: " + response.data.result + ", " + (response.data.result < 0 ? "Negative number cannot be prime" : "isPrime: " + response.data.isPrime)
          : "Invalid string format."}`)
        setoutputClassName(`${response.data.result > minIntegerValue ? "bg-success" : "bg-danger"}`);
      })
      .catch(function (error) {
        setOutputText("Error when REST api is called.");
        setoutputClassName('bg-danger');
      })
  }

  return (
    <div className="App" >
      <div className="form-floating mb-2 d-flex align-items-center">
        <input type="email" className="form-control" id="floatingInputNumbers"
          placeholder="1,3,6"
          onChange={(e) => handleNumberSubmission(e)} />
        <label htmlFor="floatingInputNumbers">Enter data like: 23 or 3,5,7</label>
      </div>
      <span className={`placeholder col-12 ${outputClassName}`} > {outputText}</span>
    </div>
  );
}

export default App;
