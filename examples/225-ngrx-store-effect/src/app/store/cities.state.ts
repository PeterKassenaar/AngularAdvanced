// cities.state.ts - defining the interface for our cities in the store
import {City} from '../shared/models/city.model';

export interface CitiesState {
  cities: City[];
}

// Our initial state - one city
export const initialState: City[] = [
  new City(-1, 'Unknown City', 'Unknown Province')
];

// Response that is shown if error
export const errorCity: City[] = [
  new City(-1, 'ERROR!', 'Oops, something bad happened...')
];
