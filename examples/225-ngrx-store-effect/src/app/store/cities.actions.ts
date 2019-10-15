// cities.actions.ts

import {createAction, props} from '@ngrx/store';
import {City} from '../shared/models/city.model';

// 1. Load city via @ngrx/effects
export const LoadCitiesViaEffect = createAction(
  'CITIES - load cities via Effect',
);

// On success, this action is dispatched from cities.effects.ts
export const loadCitiesSuccess = createAction(
  'CITIES - Load cities success',
  props<{ cities: City[] }>()
);

// On failure, this action is dispatched from cities.effects.ts
export const loadCitiesFail = createAction(
  'CITIES - Load cities fail'
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

