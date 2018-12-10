import React, { Component } from 'react';
import ak from './Community';
let myComm = new ak.Community();
myComm.addCity('Calgary', 51.0486, -114.0708, 157700);
myComm.addCity('Barcelona', 41.3851, 2.1734, 1610000);
myComm.addCity('Buenos Aires', -34.6037, -58.3816, 2890000);


class CommunityComp extends Component {
  // constructor(){
  //  super();
  //  this.state = {
  //     myComm: new ak.Community()
  //   }
  // }
  reset() {
    myComm.reset();
    document.getElementById('list').value = myComm.showList();
  }

  addCity() {

    let name = document.getElementById('name').value;
    let lat = document.getElementById('lat').value;
    let long = document.getElementById('long').value;
    let pop = document.getElementById('pop').value;
    //this.state.addCity(name, lat, long, pop);
    myComm.addCity(name, lat, long, pop);
    //Show the last added city to the myComm Community
    document.getElementById('list').value = myComm.showList();
    document.getElementById('index').value = myComm.index + 1;
  }

  getPopulation() {
    let pop = document.getElementById('show').value = myComm.getPopulation();
    //using ('show') to display the total population in the lower box if
    //I want to display it at the pop box, I need to write ('pop')
    document.getElementById('list').value = myComm.showList();
  }

  northern() {
    document.getElementById('show').value =
    myComm.show(myComm.getMostNorthern()).show();
    document.getElementById('list').value = myComm.showList();
  }

  southern() {
    document.getElementById('show').value =
    myComm.show(myComm.getMostSouthern()).show();
    document.getElementById('list').value = myComm.showList();
  }

  first() {
    myComm.first();
    document.getElementById('index').value = myComm.index + 1;
  }

  next() {
    myComm.next();
    document.getElementById('index').value = myComm.index + 1;
  }

  previous() {
    myComm.prev();
    document.getElementById('index').value = myComm.index + 1;

  }
  last() {
    myComm.last();
    document.getElementById('index').value = myComm.index + 1;

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
        <button onClick={this.addCity}>Add City</button>
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
