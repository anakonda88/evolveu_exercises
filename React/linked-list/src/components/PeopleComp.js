import React, { Component } from 'react';
import ak from './People';

class PeopleComp extends Component {
  constructor(){
    super();
    this.state = {
      myFam: new ak.Family()
    }
  }

  addPeople = () => {
    let name = document.getElementById('name2').value;
    let age = document.getElementById('age').value;
    let dollars = document.getElementById('dollars').value;
    this.state.myFam.addPeople(name, age, dollars)
    document.getElementById('peopleList').innerHTML = this.state.myFam.show();
  }

  addAge = () => {
    document.getElementById('peopleList').innerHTML = this.state.myFam.addAge();
  }

  addBirthday = () => {
    let age = document.getElementById('age').value;
    this.state.myFam.addBirthday()
    document.getElementById('peopleList').innerHTML = this.state.myFam.show();
  }
  clear2 = () => {
    let name = document.getElementById('name2').value = '';
    let age = document.getElementById('age').value = '';
    let dollars = document.getElementById('dollars').value = '';
  }
  render = () => {

    return (
      <div className ="people">
        <h2>People </h2>
        <br/>
        <textarea id='name2' rows = '1' cols = '8'></textarea>
        <textarea id='age' rows = '1' cols = '8'></textarea>
        <textarea id='dollars' rows = '1' cols = '8'></textarea>
        <br/>
        <button onClick={this.addPeople}>People</button>
        <button onClick={this.addAge}>Age</button>
        <button onClick={this.addBirthday}>Birthday</button>
        <br/>
        <button onClick={this.clear2}>Clear</button>
        <br/>
        <div id='peopleList' ></div>
        <br/>


      </div>
    );
  }
}






export default PeopleComp;
