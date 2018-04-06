import React, { Component } from 'react';

class Pokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			data: {
				sprites: {}
			}
		};
	}

	render() {
		return (
			<div>
				<img src={this.state.data.sprites.front_default} />
				<p>{this.state.data.name} rules !</p>
			</div>
		);
	}
	
	componentDidMount() {
		this.getPokemon();
	}

	getPokemon() {
		fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.id)
			.then(response => response.json())
			.then(responseJson => { console.log(this.state.id); console.log(responseJson); return responseJson; })
			.then(responseJson => this.setState({
				data: responseJson
			}));
	}
}

export default Pokemon;
