import {getFirstAbility,convertPoundsToKilograms} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
	abilities: []
};
const pokemon = {
	abilities: [
		{
			ability:{
				name: "chlorophyll"
			}
		}
	]
};

describe('Tests for getFirstAbility', () => {
	it('Should return null if there is no abilities', () => {
		expect(getFirstAbility(emptyPokemon)).toEqual(null);
	})
	it('Should return the first ability', () => {
		expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
	})
});

describe('Tests for convertPoundsToKilograms', () => {
	it('Should return 0 if the weight is 0 pounds', () => {
		expect(convertPoundsToKilograms(0)).toEqual(0);
	})
	it('Should return 4.53592 if the weight is 10 pounds', () => {
		expect(convertPoundsToKilograms(10)).toEqual(4.53592);
	})
});
