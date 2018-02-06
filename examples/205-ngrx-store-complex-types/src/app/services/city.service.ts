import {Injectable} from '@angular/core';

import * as fromActions from '../actions/cities.actions';

import {AppState} from '../appState';
import {Store} from '@ngrx/store';
import {catchError, tap} from 'rxjs/operators';
import {City} from '../models/city.model';


@Injectable()
export class CityService {
	// Set up some cities to start with.
	// At a later point these will of course come from an external
	// resource (like a .json file or database)!
	private cities: City[]=[
		{
			"id": 1,
			"name": "Groningen",
			"province": "Groningen",
			"inhabitants": 185000
		},
		{
			"id": 2,
			"name": "Hengelo",
			"province": "Overijssel",
			"inhabitants": 78000
		},
		{
			"id": 3,
			"name": "Den Haag",
			"province": "Zuid-Holland",
			"inhabitants": 345000
		},
		{
			"id": 4,
			"name": "Enschede",
			"province": "Grote Markt",
			"inhabitants": 137000
		},
		{
			"id": 5,
			"name": "Heerlen",
			"province": "Limburg",
			"inhabitants": 67000
		}
	];

	constructor(private store: Store<AppState>) {

	}

	loadCities() {
		this.store.dispatch(new fromActions.LoadCities(this.cities))
	}

	// TODO: add extra method to add, remove cities, etc.

}