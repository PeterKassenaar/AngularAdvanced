// cities.reducer.ts
import {createReducer, on} from '@ngrx/store';
import {endLoading, loadCitiesFail, loadCitiesSuccess, removeCity, startLoading} from './cities.actions';
import {Action} from '@ngrx/store/src/models';
import {CitiesState, errorCity, initialState} from './cities.state';

const reducer = createReducer(
  initialState,
  // start loading, emit loading = true, so spinner/loading message can be shown.
  on(startLoading, (state) => ({
    ...state,
    loading: true
  })),

  // loading complete, emit loading = false, so spinner/loading message can be hidden.
  on(endLoading, (state) => ({
    ...state,
    loading: false
  })),

  // Loading cities was a success
  on(loadCitiesSuccess, (state, payload) => ({
    ...state,
    cities: [...payload.cities]
    // loading state is handled by endLoading action
  })),

  // Fail: something bad happened
  on(loadCitiesFail, (state) => ({
    ...state,
    cities: [...errorCity.cities]
    // loading state is handled by endLoading action
  })),

  // Remove a city
  on(removeCity, (state, payload) => ({
    ...state,
    cities: [...state.cities.filter(city => city !== payload.city)]
  }))
  // TODO: Workshop: add extra reducers for updating and adding new cities.
);

export const citiesReducer = (
  state: CitiesState | undefined,
  action: Action) => {
  return reducer(state, action);
};
