import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	cities: any;
	currentCity;

	constructor(private store: Store<any>) {
	}

	ngOnInit() {
		this.store.select('citiesReducer')
			.subscribe(cities => {
				console.log(cities);
				this.cities = cities
			});
	}

	addCity(city: HTMLInputElement) {
		// add city to store
		this.store.dispatch({type: "ADD_CITY", payload: city.value});
		city.value = '';
	}

	removeCity(city) {
		// Remove city from store
		this.store.dispatch({type: "REMOVE_CITY", payload: city});
	}

	editCity(city) {
		this.currentCity = city;
	}

	saveCity(city: HTMLInputElement) {
		let payload = {
			oldValue: this.currentCity,
			newValue: city.value
		};
		this.store.dispatch({type: "EDIT_CITY", payload: payload});
		this.currentCity = city.value = null;
	}

	cancel() {
		this.currentCity = null;
	}
}
