// cities.store.ts
// Create a very specific selector that tells ngrx
// how to get a hold of this particular feature.

import * as fromCityStore from './cities-store.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// 1. What this line tells the store, is that it should find a
// State of type CityState on the property 'cities',
export const getCityFeatureState = createFeatureSelector<
  fromCityStore.CityState
>('cities');

// 2. Now, for the actual selector that will return our cities
// we can use this featureSelector, to drill into our CityState
// (my head exploded when first trying to comprehend this, PK):
export const getCityEntities = createSelector(
  getCityFeatureState,
  fromCityStore.getCitiesEntities
);

// By using `createSelector`, we can combine the feature-selector with
// a selector defined further down in our state-tree. The important part here,
// is that this part of the store should know as little as possible about the
// actual CityState, so if we change the way we access cities within
// our cities-store.reducer.ts all we need to do is change the
// selector *there* and not bother with this.
// (credits:http://ngxsolutions.azurewebsites.net/understanding-features-in-ngrx-4/)

// See also this article by Todd Motto on the subject:
// https://toddmotto.com/ngrx-store-understanding-state-selectors

// Now look in the cities.component.ts and see how this getCityEntities is used.
