import React, { Component } from 'react';
import ak from './MyMath';

class MyMathComp extends Component {

  myAdd = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
    result.innerHTML = ak.add(parseInt(num1), parseInt(num2));
  }

  mySubt = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
    result.innerHTML = ak.subt(parseInt(num1), parseInt(num2));
  }

  myMult = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
    result.innerHTML = ak.mult(parseInt(num1), parseInt(num2));
  }

  myOddEven = () => {
    console.log('odd or even');
    let num1 = document.getElementById('num1').value;
    let result = document.getElementById('result');
    result.innerHTML = ak.odd_even(parseInt(num1));
  }

  math = () => {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let operation = document.getElementById('ops').value;
  let result = document.getElementById('result');
  result.innerHTML = ak.math2(operation, parseInt(num1), parseInt(num2));
  }
render() {
  return (
    <div className ="mathfunction">
      <h2>Hello from Math Component</h2>
      <br/>
      Number: <input id='num1' type='text'></input>
      <br/>
      Number: <input id='num2' type='text'></input>
      <br/>
      <button onClick={this.myAdd}>Add</button>
      <button onClick={this.mySubt}>Subtraction</button>
      <button onClick={this.myMult}>Multiplication</button>
      <button onClick={this.myOddEven}>Odd or Even</button>
      <br/>
      <input id='ops' type='text'></input>
      <button onClick={this.math}>string_ope</button><br/>
      <div id='result' ></div>
      <br/>
    </div>
  );
}
}

export default MyMathComp;
