import React, { Component } from 'react';
import ak from './MyMath';

class MyMathComp extends Component {

  myAdd = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
    result.value = ak.add(parseInt(num1), parseInt(num2));
  }

  mySubst = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
    result.value = ak.subst(parseInt(num1), parseInt(num2));
  }

  myMult = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
    result.value = ak.mult(parseInt(num1), parseInt(num2));
  }

  myOddEven = () => {
    console.log('odd or even');
    let num1 = document.getElementById('num1').value;
    let result = document.getElementById('result');
    result.value = ak.odd_even(parseInt(num1));
  }

  math = () => {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let operation = document.getElementById('ops').value;
  let result = document.getElementById('result');
  result.value = ak.math2(operation, parseInt(num1), parseInt(num2));
  }
render() {
  return (
    <div className ="mathfunction">
      <h2>My Math </h2>
      <br/>
      <textarea id='num1' rows = '1' cols = '5'></textarea>
      <textarea id='num2' rows = '1' cols = '5'></textarea>
      <br/>
      <button onClick={this.myAdd}>Add</button>
      <button onClick={this.mySubst}>Substraction</button>
      <button onClick={this.myMult}>Multiplication</button>
      <br/>
      <button onClick={this.myOddEven}>Odd or Even</button>
      <br/>
      <textarea id='result' rows = '2' cols = '5'></textarea>
      <br/>
      <input id='ops' type='text'></input><br/>
      <button onClick={this.math}>string_ope</button>
    </div>
  );
}
}

export default MyMathComp;
