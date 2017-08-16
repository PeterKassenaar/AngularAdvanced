import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Car} from '../model/10-car.model';

@Injectable()
export class CarRemoteService {

	constructor(private http: Http) {
	}

	// Get fake cars
	public getCars(): Observable<Car[]> {
		return this.http
			.get('someEndPoint/someCars.json')
			.map(result => result.json());
	}

	// Get fake cars by year
	public getCarsByYear(year: number): Observable<Car[]> {
		return this.http
			.get(`someEndPoint/${year}/someCars.json`)
			.map(result => result.json());
	}
}