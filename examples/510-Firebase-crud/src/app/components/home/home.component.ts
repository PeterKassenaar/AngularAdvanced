import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {City} from '../../shared/model/city.model';
import {CityService} from '../../shared/services/city.service';

@Component({
	selector   : 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	cities$: FirebaseListObservable<City[]>;

	constructor(private cityService:CityService) {

	}

	ngOnInit() {
		this.cities$ = this.cityService.getCities();
	}

	remove(city){
		this.cityService.removeCity(city);
	}
}
