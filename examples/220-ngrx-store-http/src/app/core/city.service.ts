import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Store} from '@ngrx/store';

import {environment} from 'environments/environment';
import {Observable} from 'rxjs/Observable';

import {City} from './city.model';
import {AppState} from './appstate.interface';
import {ACTIONS} from './city.actions';

// RxJS operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// some constants
const BASE_URL = environment.apiUrl;
const HEADERS  = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class CityService {
	cities$: Observable<City[]>;

	constructor(private store: Store<AppState>,
				private http: Http) {
		this.cities$ = this.store.select(s => s.cities);
	}

	// load initial cities and dispatch them to the store
	loadCities() {
		this.http.get(BASE_URL)
			.map(res => res.json())
			.do(cities => console.log('just checking: ', cities))
			.subscribe(cities =>
					this.store.dispatch({type: ACTIONS.LOAD_CITIES, payload: cities}),
				err => console.log('ERROR! Did you start json-server on localhost:3000? (use "npm run json-server")', err),
				() => console.log('Getting cities complete...'));
	}

	// add a city to the store
	addCity(city: City): void {
		this.http.post(BASE_URL, JSON.stringify(city), HEADERS)
			.map(res => res.json())
			.subscribe(payload =>
				this.store.dispatch({type: ACTIONS.ADD_CITY, payload: payload}));
	}

	// Remove city from store
	removeCity(city: City) {
		this.http.delete(`${BASE_URL}/${city.id}`)
			.subscribe(action =>
				this.store.dispatch({type: ACTIONS.REMOVE_CITY, payload: city}));
	}
}