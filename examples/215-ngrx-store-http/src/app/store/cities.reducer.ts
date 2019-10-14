// cities.reducer.ts

import {City} from '../shared/models/city.model';
import {createReducer, on} from '@ngrx/store';
import {loadCities, removeCity} from './cities.actions';
import {Action} from '@ngrx/store/src/models';
import {initialState} from './cities.state';


const reducer = createReducer(
  initialState,
  on(loadCities, (state, payload) => [...payload.cities]),
  on(removeCity, (state, payload) => [...state.filter(city => city !== payload.city)])
  // TODO: Workshop: add extra reducers for updating and adding new cities.
);

export const citiesReducer = (
  state: City[] | undefined,
  action: Action) => {
  return reducer(state, action);
};
