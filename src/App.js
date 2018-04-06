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
        <p className="App-intro">
	  The best pokemon is {this.state.pokemon.name} !
        </p>
	<Pokemon />
      </div>
    );
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
      .then(response => response.json())
      .then(responseJson => { console.log(responseJson); return responseJson; })
      .then(responseJson => this.setState({
        pokemon: responseJson
      }));
  }
}

export default App;
