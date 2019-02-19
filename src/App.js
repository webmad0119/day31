import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import CoolButton from './coolButton';
import ToggableMenu from './toggableMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoolButton />
        <ToggableMenu />
        <ToggableMenu />
      </div>
    );
  }
}

export default App;
