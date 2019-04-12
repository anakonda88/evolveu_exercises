import React, { Component } from 'react';
import ak from './Community';
// let myComm = new ak.Community();
// myComm.addCity('Calgary', 51.0486, -114.0708, 157700);
// myComm.addCity('Barcelona', 41.3851, 2.1734, 1610000);
// myComm.addCity('Buenos Aires', -34.6037, -58.3816, 2890000);


class CommunityComp extends Component {
  constructor(){
   super();
   this.state = {
      myComm: new ak.Community()
    }
  }

  reset = () => {
    this.state.myComm.reset();
    document.getElementById('list').value = this.state.myComm.showList();
  }

  addCity = () => {
    let name = document.getElementById('name').value;
    let lat = document.getElementById('lat').value;
    let long = document.getElementById('long').value;
    let pop = document.getElementById('pop').value;
    this.state.myComm.addCity(name, lat, long, pop)
    //Show the last added city to the myComm Community

    document.getElementById('list').value = this.state.myComm.showList();
    document.getElementById('index').value = this.state.myComm.index + 1;
    console.log(this.state.myComm);
  }

  getPopulation = () => {
    let pop = document.getElementById('show').value = this.state.myComm.getPopulation();
    //using ('show') to display the total population in the lower box if
    //I want to display it at the pop box, I need to write ('pop')
    document.getElementById('list').value = this.state.myComm.showList();
  }

  northern = () => {
    document.getElementById('show').value =
    this.state.myComm.getMostNorthern();
    //this.state.myComm.show(this.state.myComm.getMostNorthern()).show();
    document.getElementById('list').value = this.state.myComm.showList();
  }

  southern = () => {
    document.getElementById('show').value =
            this.state.myComm.show(this.state.myComm.getMostSouthern()).show();
    document.getElementById('list').value = this.state.myComm.showList();
  }

  first = () => {
    this.state.myComm.first();
    document.getElementById('index').value = this.state.myComm.index + 1;
    document.getElementById('show').value = this.state.myComm.getCity().name +
                                            ' '+ this.state.myComm.getCity().lat;
  }

  next = () => {
    this.state.myComm.next();
    document.getElementById('index').value = this.state.myComm.index + 1;
  }

  previous = () => {
    this.state.myComm.prev();
    document.getElementById('index').value = this.state.myComm.index + 1;

  }
  last = () => {
    this.state.myComm.last();
    document.getElementById('index').value = this.state.myComm.index + 1;

  }

  clear = () => {
    document.getElementById('name').value = '';
    document.getElementById('lat').value = '';
    document.getElementById('long').value = '';
    document.getElementById('pop').value = ''
  }

  render = () => {
    console.log(this.state.myComm);
    return (
      <div className ="community">
        <h2>City </h2>
        <br/>
        City: <input id='name' type='text'></input>

        Latitude: <input id='name' type='text'></input>

        Longitude: <input id='name' type='text'></input>
        
        Population: <input id='name' type='text'></input>

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
        <div id='show'></div>
        <br/>
        <div id='list'></div>
        <br/>


      </div>
    );
  }
}




export default CommunityComp;
