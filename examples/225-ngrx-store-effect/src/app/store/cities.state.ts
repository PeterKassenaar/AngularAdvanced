// cities.state.ts - defining the interface for our cities in the store
import {City} from '../shared/models/city.model';

// The shape of our state: an array with cities and a loading indicator
export interface CitiesState {
  cities: City[];
  loading: boolean;
}

// Our initial state - one city with loading set to false
export const initialState: CitiesState = {
  cities: [new City(-1, 'Unknown City', 'Unknown Province')],
  loading: false
};

// Response that is shown if error
export const errorCity: CitiesState = {
  cities: [new City(-1, 'ERROR!', 'Oops, something bad happened...')],
  loading: false
};
