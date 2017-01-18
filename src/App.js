import React, { Component } from 'react';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="foo">Welcome to React!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button label="Ciao sono federico" />
        <Button label="Ciao sono alessandro" />
      </div>
    );
  }
}

export default App;
