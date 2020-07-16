// cities.reducer.ts
import {createReducer, on} from '@ngrx/store';
import {loadCities, loadCitiesComplete, loadCitiesStart, removeCity} from './cities.actions';
import {Action} from '@ngrx/store/src/models';
import {CitiesState, initialState} from './cities.state';

const reducer = createReducer(
  initialState,
  // 1. Loading started - set 'loading' property to true.
  on(loadCitiesStart, state =>{
    return {
      ...state,
      loading: true
    }
  }),
  // 2. Loading complete - set 'loading' state to false.
  on(loadCitiesComplete, state =>{
    return {
      ...state,
      loading: false
    }
  }),
  // 3. Add loaded cities to the current state (loading state unaltered).
  on(loadCities, (state, payload) => {
    return {
      ...state,
      cities: [...payload.cities]
    }
  }),
  // 4. Remove a city from the state (loading state unaltered).
  on(removeCity, (state, payload) => {
    return {
      ...state,
      cities: [...state.cities.filter(city => city !== payload.city)]
    }
  })
  // TODO: Workshop: add extra reducers for updating and adding new cities.
);

export const citiesReducer = (
  state: CitiesState | undefined,
  action: Action) => {
  return reducer(state, action);
};
