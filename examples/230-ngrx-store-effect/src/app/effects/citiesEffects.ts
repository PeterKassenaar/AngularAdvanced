import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {CityService} from '../services/city.service';

import * as cityActions from '../actions/cities.actions'
import {map, switchMap, catchError} from 'rxjs/operators';
import {City} from '../models/city.model';

@Injectable()
export class CitiesEffects {

	constructor(private action$: Actions,
				private cityService: CityService) {
	}

	@Effect()
	loadCities$ = this.action$.ofType(cityActions.LOAD_CITIES_EFFECT)	// 1. Receive action from dispatcher
		.pipe(
			switchMap(() => {
				return this.cityService.loadCities()	// 2. Talk to API
					.pipe(
						map((cities: City[]) => new cityActions.LoadCities(cities)), // 3. Dispatch new action this one will dispatch the new action by default. Use @Effect({dispatch: false}) if the effect should not auto-dispatch
						catchError(err => {
							console.log(err);
							throw err.json();	// 4. Optional (but best practice): catch errors
							// Normally you would do something like new cityActions.LoadCitiesFail(err), to catch the error in the store. TODO!
						})
					)
			})
		)
}