import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyMathComp from './components/MyMathComp.js';
import CommunityComp from './components/CommunityComp.js';
import PeopleComp from './components/PeopleComp.js';


class App extends Component {
  // onPassedFunction = ()=>{
  //   console.log('We are in the app function');
  // }
  render() {
    return (
      <div className="App">
        <h1>Practice</h1>
        <MyMathComp name='Top1'/>
        <CommunityComp name='Top2'/>
        <PeopleComp name='Top3'/>
      </div>



    );
  }
}

export default App;
