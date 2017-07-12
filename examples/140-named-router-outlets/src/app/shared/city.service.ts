import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {City} from "./city.model";

// Import rxjs-operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class CityService {

	constructor(private http: Http) {

	}

	// retourneer alle cities, gemapt naar json
	getCities(): Observable<City[]> {
		return this.http.get('assets/data/cities.json')
			.map(cities => cities.json())
	}

	getCity(id: number): Observable<City> {
		// not the best way to do it (fetching all cities again over http), but it works for the demo.
		return this.http.get('assets/data/cities.json')
			.delay(500)
			.map(cities => cities.json())
			.map((cities: City[]) => {
				return cities.find(city => city.id === id);
			})
	}
}
