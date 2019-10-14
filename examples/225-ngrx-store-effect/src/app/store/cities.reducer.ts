// cities.reducer.ts

import {City} from '../shared/models/city.model';
import {createReducer, on} from '@ngrx/store';
import {loadCitiesFail, loadCitiesSuccess, removeCity} from './cities.actions';
import {Action} from '@ngrx/store/src/models';
import {errorCity, initialState} from './cities.state';


const reducer = createReducer(
  initialState,
  on(loadCitiesSuccess, (state, payload) => [...payload.cities]),
  on(loadCitiesFail, (state) => [...errorCity]), // on failure, returen an empty array
  on(removeCity, (state, payload) => [...state.filter(city => city !== payload.city)])
  // TODO: Workshop: add extra reducers for updating and adding new cities.
);

export const citiesReducer = (
  state: City[] | undefined,
  action: Action) => {
  return reducer(state, action);
};
