// cities-store.reducer.ts
import * as fromCityActions from './cities-store.actions';
import { City } from '../model/city.model';
// AppState for the City Feature Module (hence we call it CityState).
// - Can also be placed in a separate file.
// It is now inside the reducer for convenience.
export interface CityState {
  cities: City[];
  loading: boolean;
}

export const initialState: CityState = {
  cities: [],
  loading: false
};
export function citiesReducer(
  state: CityState = initialState,
  action: fromCityActions.All
): CityState {
  switch (action.type) {
    case fromCityActions.LOAD_CITIES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCityActions.LOAD_CITIES_COMPLETE: {
      return {
        ...state,
        cities: action.payload,
        loading: false
      };
    }
    // TODO: Add switch statements for Edit/Remove/Update Cities
    default: {
      return state;
    }
  }
} // end citiesReducer

// Here, we create a * state selector*. Otherwise, the complete state (including the 'loading' flag)
// would be returned upon selection. So we're creating a function here that takes an
// object of type CityState and returns the .cities property from that object.
// The function is called in cities.store.ts. Look up that file!
export const getCitiesEntities = (state: CityState) => state.cities;
