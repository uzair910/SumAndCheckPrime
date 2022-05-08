import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ACTION_SUMANDCHECK, API_HOST } from './config';
import React, { useState } from "react";
import './App.css';

function App() {
  const [outputText, setOutputText] = useState('Start entering numbers..');
  const [outputClassName, setoutputClassName] = useState('bg-info');

  function handleNumberSubmission(e) {
    // Maybe use regex to text string pattern.
    if (e.target.value !== '') {
      calculateSumAndCheckPrime(e.target.value);
    } else {
      // there should be a proper way to set back to default state, investigate!
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
        if (response.data.result > -2147483648) {
          setOutputText(`Sum:  ${response.data.result} , isPrime: ${response.data.isPrime}`)
          setoutputClassName('bg-success');
        } else {
          setOutputText("Invalid string format.");
          setoutputClassName('bg-danger');
        }
      })
      .catch(function (error) {
        setOutputText("Error when REST api is called.");
        setoutputClassName('bg-danger');
      })
      .finally(function () {
        // always executed
      });
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
