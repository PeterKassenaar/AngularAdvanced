// cities.effects.ts - handle side effects (such as talking to an API)
// via the createEffect() function

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CityService} from '../shared/services/city.service';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {City} from '../shared/models/city.model';
import {loadCitiesSuccess, LoadCitiesViaEffect, loadCitiesFail} from './cities.actions';

@Injectable()
export class CitiesEffects {

  constructor(private actions$: Actions,
              private cityService: CityService) {
  }

  loadCities$ = createEffect(() => this.actions$.pipe(
    ofType(LoadCitiesViaEffect), // 1. Listen to this specific event (fired from app.component.ts)
    mergeMap(() => {
      return this.cityService.loadCities()  // 2. talk to API
        .pipe(
          map((cities: City[]) => loadCitiesSuccess({cities})), // 3. Dispatch new action
          catchError(() => of(loadCitiesFail())) // 4. catch error and dispatch failure action
        );
    })
  ));
}
