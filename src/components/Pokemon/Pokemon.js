import React, { Component } from 'react';
import {getFirstAbility} from './Pokemon.service';

class Pokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			data: {
				sprites: {},
				abilities: []
			}
		};
	}

	render() {
		return (
			<div>
				<h3>{this.state.data.name}</h3>
				<img src={this.state.data.sprites.front_default} alt=""/>
				<ul>
					<li>First ability : {getFirstAbility(this.state.data)}</li>
				</ul>
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
