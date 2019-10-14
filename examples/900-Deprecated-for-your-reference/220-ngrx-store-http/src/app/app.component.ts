import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {City} from './models/city.model';
import {AppState} from './appState';
import {Store} from '@ngrx/store';
import * as fromCityActions from './actions/cities.actions';
import {CityService} from './services/city.service';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	cities$: Observable<City[]>;

	constructor(private store: Store<AppState>, private  cityService: CityService) {
	}

	ngOnInit() {
		// initial load of cities via direct Http from service
		this.cities$ = this.store.select(c => c.city);
	}

	// city observable stuff
	addCity() {
		// TODO
	}

	removeCity(city) {
		this.cityService.removeCity(city);
	}
}
