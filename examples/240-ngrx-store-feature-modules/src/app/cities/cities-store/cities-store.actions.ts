// cities.actions.ts
// import Action interface to be used later
import { Action } from '@ngrx/store';
import { City } from '../model/city.model';

// Action Constants
export const LOAD_CITIES = '[CITIES] - Load Cities';
export const LOAD_CITIES_COMPLETE = '[CITIES] - Load Cities :: Complete';
export const ADD_CITY = '[CITIES] - Add City';
export const REMOVE_CITY = '[CITIES] - Remove City';

// *** Action Creators.
export class LoadCities implements Action {
  readonly type = LOAD_CITIES;
}

export class LoadCitiesComplete implements Action {
  readonly type = LOAD_CITIES_COMPLETE;
  constructor(public payload: City[]) {}
}

export class AddCity implements Action {
  readonly type = ADD_CITY;
  constructor(public payload: City) {}
}

export class RemoveCity implements Action {
  readonly type = REMOVE_CITY;

  constructor(public payload: City) {}
}

// TODO - increase Actions for removing, editing cities, etc.
export type All = LoadCities | LoadCitiesComplete | AddCity | RemoveCity;
