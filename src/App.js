import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import CoolButton from './coolButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoolButton />
        <CoolButton />
        <CoolButton />
        <CoolButton />
        <CoolButton />
      </div>
    );
  }
}

export default App;
