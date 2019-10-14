// cities.state.ts - defining the interface for our cities in the store
import {City} from '../shared/models/city.model';

export interface CitiesState {
  cities: City[];
}

export const initialState: City[] = [
  new City(-1, 'Unknown City', 'Unknown Province')
];
