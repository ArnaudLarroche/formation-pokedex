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
		const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		const pokemonList = pokemonIds.map((id, key) => <Pokemon key={key} id={id} />);

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				{pokemonList}
			</div>
		);
	}

}

export default App;
