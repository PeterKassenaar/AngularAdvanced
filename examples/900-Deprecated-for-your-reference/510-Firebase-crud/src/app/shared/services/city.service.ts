import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {City} from '../model/city.model';

@Injectable()
export class CityService {

	constructor(private af: AngularFireDatabase) {
	}

	getCities(): FirebaseListObservable<City[]> {
		return this.af.list('/cities');
	}

	addCity(city: City): void {
		this.af.list('/cities')
			.push(city);
	}

	updateCity(city: City): void {
		//...
	}

	removeCity(city: City): void {
		this.af.list('/cities/' + city.$key)
			.remove();
	}

	getRandomId(): number {
		return Math.floor((Math.random() * 10000) + 1);
	}

}
