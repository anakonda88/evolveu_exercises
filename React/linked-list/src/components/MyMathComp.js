import React, { Component } from 'react';
import ak from './MyMath';

class MyMathComp extends Component {

  myMath = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let result = document.getElementById('result')
    //result.value= parseInt(num1) + parseInt(num2);
    result.value = ak.add(parseInt(num1),parseInt(num2));

  }
  myMath2 = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let result = document.getElementById('result')
    result.value = ak.subst(parseInt(num1),parseInt(num2));
  }

  myMath3 = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let result = document.getElementById('result')
    result.value = ak.mult(parseInt(num1),parseInt(num2));
  }
  myMath4 = () => {
    console.log('odd or even');
    let num1 = document.getElementById('num1').value
    let result = document.getElementById('result')
    result.value = ak.odd_even(num1);
  }

  // myMath(){
  // let num1 = document.getElementById('num1').value
  // let num2 = document.getElementById('num2').value
  // let result = document.getElementById('result')
  // result.value= parseInt(num1) + parseInt(num2);

//  }

render() {
  return (
    <div className ="mathfunction">
      <h2>My Math </h2>
      <br/>
      <textarea id='num1' rows = '1' cols = '10'></textarea>
      <textarea id='num2' rows = '1' cols = '10'></textarea>
      <br/>

      <button onClick={this.myMath}>Add</button>
      <button onClick={this.myMath2}>Substraction</button>
      <button onClick={this.myMath3}>Multiplication</button>
      <br/>
      <button onClick={this.myMath4}>Odd or Even</button>
      <br/>
      <textarea id='result' rows = '2' cols = '10'></textarea>
      <br/>
    </div>
  );
}
}

export default MyMathComp;
