// Here, 'cities' is our reducer.
// It is a function which takes a state and an action and returns a new state.
// If you use store.select('cities') in your application,
// it actually looks for this reducer!

/*
* what is an action? It is an object with a type and a paylod.
* It is also typed in the @ngrx/store library, therefore we can import it:
* {
* 	type : string,
*  	payload? : any
* }
* */

//city.reducer.ts
import {Action} from '@ngrx/store';

export function citiesReducer(state = [], action: Action) {
	switch (action.type) {
		case "ADD_CITY": {
			// add the payload (= a new city) to the
			// already existing state and return it as a new object/array.
			return [
				...state,
				action.payload
			];
		}
		case "REMOVE_CITY": {
			return state.filter(city => city !== action.payload);
		}
		case "EDIT_CITY": {
			let index = state.indexOf(action.payload['oldValue']);
			if (index !== -1) {
				state[index] = action.payload['newValue'];
			}
			return Array.prototype.concat(state);
		}
		default: {
			// return unaltered state
			return state;
		}
	}
};