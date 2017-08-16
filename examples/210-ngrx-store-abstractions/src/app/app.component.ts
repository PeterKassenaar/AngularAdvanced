import {Component, OnInit} from '@angular/core';
import {Dispatcher, Store} from '@ngrx/store';
import {ACTIONS} from './core/city.actions';
import {AppState} from './core/appstate.interface';
import {City} from './core/city.model';
import {Observable} from 'rxjs/Observable';
import {CityService} from './core/city.service';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	cities$: Observable<City[]>;
	selectedCity$: Observable<City>;

	constructor(private store: Store<AppState>,
				private cityService: CityService,
				private dispatcher: Dispatcher) {
	}

	ngOnInit() {
		this.cities$       = this.cityService.cities$;
		this.selectedCity$ = this.store.select(s => s.selectedCity); // talk to store directly. No problem, b/c this is a completely synchronous operation.
		this.cityService.loadCities();
		// subscribe to the dispatcher
		// this.dispatcher.filter(action => action.type === ACTIONS.REMOVE_CITY)
		// 	.subscribe(()=> console.log('City removed') )
	}

	addCity(city: HTMLInputElement, province: HTMLInputElement, inhabitants: HTMLInputElement) {
		// add new city to store via the service
		this.cityService.addCity(
			new City(
				this.getRandomId(),
				city.value,
				province.value,
				+inhabitants.value)
		);
		city.value = province.value = inhabitants.value = '';
		city.focus();
	}

	selectCity(city) {
		// Tell the store the current city is selected, by dispatching an action and sending the
		// current city as the payload.
		// Because we are subscribed to the selectedCity (line #25), we immediately get the result back.
		// Note that we are NOT updating this.selectedCity$ directly, because otherwise we would be bypassing the
		// store and handling state ourselves (i.e. in this component). The Store MUST be notified of state
		// changes. And this is done by dispatching an action of type SELECT_CITY.
		this.store.dispatch({type: ACTIONS.SELECT_CITY, payload: city})
	}

	clear() {
		// clear the current city. Again, by dispatching an action, this time setting the payload to null.
		this.store.dispatch({type: ACTIONS.SELECT_CITY, payload: null})
	}

	removeCity(city: City) {
		// Remove city from store via service
		this.cityService.removeCity(city)
	}

	getRandomId(): number {
		return Math.floor((Math.random() * 10000) + 1);
	}

}
