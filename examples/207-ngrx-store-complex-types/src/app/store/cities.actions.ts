// cities.actions.ts

import {createAction, props} from '@ngrx/store';
import {City} from '../shared/models/city.model';

// 1. Action for adding one or more cities in an array to the store
export const loadCities = createAction(
  'CITIES - Load cities',
  props<{ cities: City[] }>()
);
// 2. Add a single city to the store
export const addCity = createAction(
  'CITIES - Add city',
  props<{ city: City }>()
);

// 3. Remove a city from the store
export const removeCity = createAction(
  'CITIES - Remove city',
  props<{ city: City }>()
);

// TODO: create your own actions for editing/updating a city, etc.

