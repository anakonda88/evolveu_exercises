import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Welcome to my New App :-)
          </p>

        </header>
        <body>
          <p> Playing with this app </p>
          <div class = 'top'>
            <textarea class = 'text' rows = '2' cols = '30'>
            </textarea>
            <button class = 'enter'>Enter</button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
