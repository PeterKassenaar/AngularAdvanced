import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import * as fromActions from '../actions/cities.actions';

import {AppState} from '../appState';
import {Observable} from 'rxjs/Observable';
import {City} from '../models/city.model';
import {Store} from '@ngrx/store';
import {catchError, tap} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/cities';
const HEADERS  = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable()
export class CityService {

	constructor(private store: Store<AppState>,
				private http: HttpClient) {
	}

	loadCities() {
		// B/c we are now using an @Effect(), the service is only responsible
		// for returing the Observable from the HTTP GET-call. The registered effect kicks
		// in and intercepts actions to the reducer
		return this.http.get(BASE_URL).pipe(
			tap(res => console.log('just received', res))
		).pipe(
			catchError(err => {
				console.log(err);
				throw err.json();
			})
		)
	}
}