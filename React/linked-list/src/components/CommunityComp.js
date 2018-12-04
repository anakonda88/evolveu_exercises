import React, { Component } from 'react';
import ak from './Community';
let myComm = new ak.Community();

class CommunityComp extends Component {

  addCity = () => {
    let name = document.getElementById('name').value;
    let lat = document.getElementById('lat').value;
    let long = document.getElementById('long').value;
    let pop = document.getElementById('pop').value;

    myComm.addCity(name, lat, long, pop)
    //Show the last added city to the myComm Community
    var idx;
    document.getElementById('show').value = ''; //to add just the object
    for(idx=0;idx<myComm.listOfCities.length;idx++){
      document.getElementById('show').value += myComm.show(idx) + '\n';
    }
  }


render() {
  return (
    <div className ="community">
      <h2>Community </h2>
      <br/>
      <textarea id='name' rows = '1' cols = '8'></textarea>
      <textarea id='lat' rows = '1' cols = '8'></textarea>
      <textarea id='long' rows = '1' cols = '8'></textarea>
      <textarea id='pop' rows = '1' cols = '8'></textarea><br/>
      <button onClick={this.addCity}>Add</button><br/>

      <textarea id='show' rows = '6' cols = '40'></textarea>

      <br/>


    </div>
  );
}
}




export default CommunityComp;
