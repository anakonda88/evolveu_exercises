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
    this.state.myFam.addPeople(name, age)
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
  }
  render = () => {

    return (
      <div className ="people">
        <h2>People </h2>
        <br/>
        Name: <input id='name2' type='text'></input>
        <br/>
        Age: <input id='age' type='text'></input>
        <br/>
        <button onClick={this.addPeople}>Name</button>
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
