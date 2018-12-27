import React, { Component } from 'react';
import ak from './MyMath';

class MyMathComp extends Component {


  myAdd = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
//    result.value = ak.add(parseInt(num1),parseInt(num2));
    result.value = ak.math2(ak.add, parseInt(num1), parseInt(num2));
  }

  mySubst = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
//    result.value = ak.subst(parseInt(num1),parseInt(num2));
    result.value = ak.math(ak.subst, parseInt(num1), parseInt(num2))
  }

  myMult = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');
//    result.value = ak.mult(parseInt(num1), parseInt(num2));
    result.value = ak.math(ak.mult, parseInt(num1), parseInt(num2))
  }

  myOddEven = () => {
    console.log('odd or even');
    let num1 = document.getElementById('num1').value;
    let result = document.getElementById('result');
    result.value = ak.odd_even(num1);
  }

  function myMath(){
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = document.getElementById('result')
  //let operation = ev.currentTarget.id;
  result.value = ak.math2(id, parseInt(num1), parseInt(num2));

 }

render() {
  return (
    <div className ="mathfunction">
      <h2>My Math </h2>
      <br/>
      <textarea id='num1' rows = '1' cols = '5'></textarea>
      <textarea id='num2' rows = '1' cols = '5'></textarea>
      <br/>

      <button id = "add" onClick={this.myMath}> Add</button>
      <button id = "subst" onClick={this.myMath}>Substraction</button>
      <button id = "mult" onClick={this.myMath}>Multiplication</button>
      <br/>
      <button id = "odd_even" onClick={this.myMath}>Odd or Even</button>
      <br/>
      <textarea id='result' rows = '2' cols = '5'></textarea>
      <br/>
    </div>
  );
}
}

export default MyMathComp;
