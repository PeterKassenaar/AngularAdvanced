import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {City} from './models/city.model';
import {AppState} from './appState';
import {CityService} from './services/city.service';

import * as fromCityActions from './actions/cities.actions';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	cities$: Observable<City[]>;
	currentCity: City;

	constructor(private store: Store<AppState>,
				private cityService: CityService) {
	}

	// Bind observable to this slice of state from the store
	ngOnInit() {
		this.cities$ = this.store.select(s => s.city)
	}

	// load initial cities on mouseclick
	loadCities() {
		this.cityService.loadCities();
	}

	// Remove city from store
	removeCity(city) {
		this.store.dispatch(new fromCityActions.RemoveCity(city));
	}

	//******************
	//TODO:  as an exercise for the reader....
	//******************
	addCity(city: HTMLInputElement) {
		// TODO: add city to store
		alert('TODO: add city: ' + city.value);
	}

	editCity(city) {
		// TODO...
		this.currentCity = city;
	}

	saveCity(city: HTMLInputElement) {
		// TODO...
		alert('TODO...')
	}

	cancel() {
		this.currentCity = null;
	}
}
