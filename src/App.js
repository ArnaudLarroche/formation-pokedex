import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
	<Pokemon id="12" />
      </div>
    );
  }

}

export default App;
