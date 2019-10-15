// cities.reducer.ts
import * as fromCityActions from '../actions/cities.actions';
import {City} from '../models/city.model';

export const initialState: City[] = [];

export interface cityState {

}

export function citiesReducer(state = initialState, action: fromCityActions.All) {
	switch (action.type) {
		case fromCityActions.LOAD_CITIES: {
			return [...action.payload];
		}
		case fromCityActions.LOAD_CITIES_EFFECT: {
			console.log('LOAD_CITIES_EFFECT dispatched');
			return state; // basically the same as above, only now via @Effect
		}
		case fromCityActions.ADD_CITY: {
			return [...state, action.payload];
		}
		case fromCityActions.REMOVE_CITY:{
			return state.filter(c => c !== action.payload)
		}
		default : {
			return state;
		}
	}
}