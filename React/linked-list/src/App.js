import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedListComp from './components/LinkedListComp.js';
import MyMathComp from './components/MyMathComp.js';

class App extends Component {
  onPassedFunction = ()=>{
    console.log('We are in the app function');
  }
  render() {
    return (
      <div className="App">
      <h1>Hello World 1</h1>
      <MyMathComp name='Top1'/>
      <LinkedListComp name='Top2' func={this.onPassedFunction}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
