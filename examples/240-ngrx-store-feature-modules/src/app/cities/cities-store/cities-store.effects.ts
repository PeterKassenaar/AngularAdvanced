// cities-store.effects.ts

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { City } from '../model/city.model';
import * as fromCityActions from './cities-store.actions';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class CitiesStoreEffects {
  // constructor
  constructor(private action$: Actions, private http: HttpClient) {}

  @Effect()
  fetchCities$ = this.action$.ofType(fromCityActions.LOAD_CITIES).pipe(
    switchMap(() => {
      return this.http.get<City[]>('http://localhost:3000/cities');
    }),
    tap(res => console.log(res)),
    map((res: City[]) => new fromCityActions.LoadCitiesComplete(res))
  );
}
