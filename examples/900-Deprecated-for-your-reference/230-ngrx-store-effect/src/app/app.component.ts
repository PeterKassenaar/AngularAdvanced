import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {City} from './models/city.model';
import {AppState} from './appState';
import {Store} from '@ngrx/store';
import * as fromCityActions from './actions/cities.actions';
import * as fromCounterActions from './actions/counter.actions';
import {CityService} from './services/city.service';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.css']
})
export class AppComponent {
	cities$: Observable<City[]>;
	counter$: Observable<number>;

	constructor(private store: Store<AppState>, private  cityService: CityService) {
	}

	ngOnInit() {
		// // initial load of cities by dispatching an effect
		this.store.dispatch(new fromCityActions.LoadCitiesViaEffect());

		// initial load of cities via direct Http from service
		this.cities$  = this.store.select(c => c.city);
		this.counter$ = this.store.select(c => c.counter);
	}

	// city observable stuff
	addCity() {
		let newCity = new City(2, 'Breda', 'NB', 180000);
		this.store.dispatch(new fromCityActions.AddCity(newCity));
	}

	removeCity(city) {
		this.store.dispatch(new fromCityActions.RemoveCity(city));
	}

	// counter observable stuff
	increment(){
		this.store.dispatch(new fromCounterActions.CounterIncrement());
	}

	decrement(){
		this.store.dispatch(new fromCounterActions.CounterDecrement());
	}

	reset(){
		this.store.dispatch(new fromCounterActions.CounterReset());
	}
}
