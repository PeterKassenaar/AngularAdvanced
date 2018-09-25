import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {City} from '../models/city.model';

import * as fromActions from '../actions/cities.actions';

import {AppState} from '../appState';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/cities';
const HEADERS  = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable()
export class CityService {

	constructor(private store: Store<AppState>,
				private http: HttpClient) {
		this.loadCities();
	}

	loadCities() {
		// example - using the .pipe() operator
		return this.http.get(BASE_URL).pipe(
			tap(res => console.log('just received', res))
		)
			.subscribe(cities => this.store.dispatch(new fromActions.LoadCities(cities)),
			err => console.log('Error: did you forget to start json-server on localhost: 3000? (use "npm run json-server")'),
			() => console.log('Getting cities complete'))
	}

	removeCity(city: City) {
		return this.http.delete(BASE_URL + `/${city.id}`, HEADERS)
			.subscribe(() => {
					console.log('City removed', city);
					// optimistic delete - assume everything went fine in the backend
					this.store.dispatch(new fromActions.RemoveCity(city))
				},
				err => {
					console.log('FOUT!: ', err);
					throw  err;
				});
	}

	addCity(city:City){
		// TODO....
	}

	editCity(city:City){
		// TODO....
	}
}
