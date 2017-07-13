import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {City} from './city.model';
import {AppState} from './appstate.interface';
import {Store} from '@ngrx/store';
import {ACTIONS} from './city.actions';

@Injectable()
export class CityService {
	cities$: Observable<City[]>;

	constructor(private store: Store<AppState>) {
		this.cities$ = this.store.select(s => s.cities);
	}

	// load initial cities and dispatch them to the store
	loadCities() {
		let initialCities: City[] = [
			new City(1, 'Dieren', 'GLD', 14500),
			new City(2, 'Amsterdam', 'NH', 680000),
			new City(3, 'New York', 'NY', 4500000),
			new City(4, 'Tokyo', 'TY', 2900000),
			new City(5, 'Breda', 'NB', 165000),
		];
		this.store.dispatch({type: ACTIONS.LOAD_CITIES, payload: initialCities})
	}

	// add a city to the store
	addCity(city: City): void {
		this.store.dispatch({type: ACTIONS.ADD_CITY, payload: city});
	}

	// Remove city from store
	removeCity(city: City) {
		this.store.dispatch({type: ACTIONS.REMOVE_CITY, payload: city});
	}
}