// cities.state.ts - defining the interface for our cities in the store
import {City} from '../shared/models/city.model';

// 1.  Also address loading state of cities from external resource
export interface CitiesState {
  cities: City[];
  loading: boolean
}

// 2.  Initialize initial state with an 'unknown' city and loading state=false.
export const initialState: CitiesState = {
  cities: [new City(-1, 'Unknown City', 'Unknown Province')],
  loading: false
};
