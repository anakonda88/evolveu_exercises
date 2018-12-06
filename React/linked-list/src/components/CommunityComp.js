import React, { Component } from 'react';
import ak from './Community';
let myComm = new ak.Community();
myComm.addCity('Calgary', 51.0486, -114.0708, 157700);
myComm.addCity('Barcelona', 41.3851, 2.1734, 1610000);
myComm.addCity('Buenos Aires', -34.6037, -58.3816, 2890000);

function showList(){
  var idx;
  document.getElementById('list').value = ''; //to add just the object
  for(idx=0;idx<myComm.length;idx++){
    document.getElementById('list').value += myComm.show(idx).show() + '\n';
  }
}

class CommunityComp extends Component {

  reset() {
    myComm.reset();
    showList();
  }

  addCity() {
    let name = document.getElementById('name').value;
    let lat = document.getElementById('lat').value;
    let long = document.getElementById('long').value;
    let pop = document.getElementById('pop').value;

    myComm.addCity(name, lat, long, pop);
    //Show the last added city to the myComm Community
    showList();
  }

  getPopulation() {
    let pop = document.getElementById('show').value = myComm.getPopulation();
    //using ('show') to display the total population in the lower box if
    //I want to display it at the pop box, I need to write ('pop')
    showList();
  }

  northern() {
    document.getElementById('show').value =
    myComm.show(myComm.getMostNorthern()).show();
    showList();
  }

  southern() {
    document.getElementById('show').value =
    myComm.show(myComm.getMostSouthern()).show();
    showList();
  }

  first() {

  }
  clear() {
    document.getElementById('name').value = '';
    document.getElementById('lat').value = '';
    document.getElementById('long').value = '';
    document.getElementById('pop').value = ''
  }

  render() {
    return (
      <div className ="community">
        <h2>Community </h2>
        <br/>
        <textarea id='name' rows = '1' cols = '8'></textarea>
        <textarea id='lat' rows = '1' cols = '8'></textarea>
        <textarea id='long' rows = '1' cols = '8'></textarea>
        <textarea id='pop' rows = '1' cols = '8'></textarea>
        <br/>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.addCity}>New City</button>
        <button onClick={this.getPopulation}>Population</button>
        <button onClick={this.northern}>Northern</button>
        <button onClick={this.southern}>Southern</button>
        <br/>
        <textarea id='index' rows = '1' cols = '4'></textarea>
        <button onClick={this.first}>First</button>
        <button onClick={this.last}>Last</button>
        <button onClick={this.next}>Next</button>
        <button onClick={this.previous}>Previous</button>
        <br/>
        <button onClick={this.clear}>Clear</button>
        <br/>
        <textarea id='show' rows = '1' cols = '40'></textarea>
        <br/>
        <textarea id='list' rows = '6' cols = '40'></textarea>
        <br/>


      </div>
    );
  }
}




export default CommunityComp;
