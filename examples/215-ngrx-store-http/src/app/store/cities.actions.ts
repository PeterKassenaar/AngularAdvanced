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

// 4. Actions for starting/stopping/error in HTTP-call. No Payload.
export const loadCitiesStart = createAction(
  'CITIES - Start loading cities',
);

export const loadCitiesComplete = createAction(
  'CITIES - Completed loading cities',
);

// Not implemented...
export const loadCitiesFail = createAction(
  'CITIES - Failed loading cities',
);
// TODO: create your own actions for editing/updating a city, etc.

