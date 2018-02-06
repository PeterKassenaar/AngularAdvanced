//cities.actions.ts

// import Action interface to be used later, also import City Model
import {Action} from '@ngrx/store';
import {City} from '../models/city.model';

// *** Action Constants
export const LOAD_CITIES        = '[CITIES] - Load Cities';
export const ADD_CITY           = '[CITIES] - Add City';
export const REMOVE_CITY        = '[CITIES] - Remove City';
export const EDIT_CITY          = '[CITIES] - Edit City';
export const SELECT_CITY        = '[CITIES] - Select City';

// *** Action Creators.
// We're taking a constant and binding it to the type property of our class
// This way we don't have to manually add the type and payload every time in
// the reducers and actions. We simply new up (instantiate) the class.
// Also - in @ngrx/store v.4 and above, the payload property is gone. We now
// add it back in ourselves: only when needed and now as a typed parameter.
export class LoadCities implements Action {
	readonly type = LOAD_CITIES;
	constructor(public payload: City[]) {

	}
}

export class AddCity implements Action {
	readonly type = ADD_CITY;

	constructor(public payload: City) {

	}
}

export class RemoveCity implements Action {
	readonly type = REMOVE_CITY;

	constructor(public payload: City) {

	}
}

// TODO - add more Actions for editing cities, etc.
export type All =
	LoadCities |
	AddCity |
	RemoveCity ;