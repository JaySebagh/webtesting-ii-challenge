import React, { Component } from 'react';
import './App.css';
import Display from './components/Display.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Beep Boop, App Alive.</h1>
        <Display />
      </div>
    );
  }
}

export default App;
