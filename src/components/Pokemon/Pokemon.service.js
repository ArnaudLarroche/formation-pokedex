module.exports = {
	getFirstAbility: function(pokemon) {
		if (pokemon.abilities.length === 0) return null;
		else return pokemon.abilities[0].ability.name;
	}
}
