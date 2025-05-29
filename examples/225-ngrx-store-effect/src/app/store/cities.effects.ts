// cities.effects.ts - handle side effects (such as talking to an API)
// via the createEffect() function

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CityService} from '../shared/services/city.service';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {City} from '../shared/models/city.model';
import {
  endLoading,
  loadCitiesFail,
  loadCitiesSuccess,
  LoadCitiesViaEffect,
  startLoading
} from './cities.actions';

@Injectable()
export class CitiesEffects {

  constructor(private actions$: Actions,
              private cityService: CityService) {
  }

  loadCities$ = createEffect(() => this.actions$.pipe(
    ofType(LoadCitiesViaEffect), // 1. Listen to this specific event (fired from app.component.ts)
    switchMap(() => {
      // Dispatch startLoading action
      return of(startLoading());
    })
  ));

  // 2. After startLoading is dispatched, handle the actual API call
  fetchCities$ = createEffect(() => this.actions$.pipe(
    ofType(startLoading),
    mergeMap(() => {
      return this.cityService.loadCities()  // Talk to API
        .pipe(
          map((cities: City[]) => {
            // First dispatch success action with cities data
            return loadCitiesSuccess({cities});
          }),
          catchError(() => {
            // On error, dispatch fail action
            return of(loadCitiesFail());
          })
        );
    })
  ));

  // 3. Handle end loading after success or fail.
  // Listen to *both* `loadCitiesSuccess` and `loadCitiesFail`, to hide the spinner/loading message.
  endLoadingAfterSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loadCitiesSuccess, loadCitiesFail),
    map(() => endLoading())
  ));

  // 4. Workshop - add removeCity$
}
