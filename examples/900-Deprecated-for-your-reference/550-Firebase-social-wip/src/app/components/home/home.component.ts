import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {City} from '../../shared/model/city.model';
import {CityService} from '../../shared/services/city.service';
import {AuthService} from '../../shared/services/auth.service';

@Component({
	selector   : 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	cities$: FirebaseListObservable<City[]>;
	visitedCities$: FirebaseListObservable<City[]>;


	// wire up with user variable in AuthService
	user$ = this.authService.user;

	constructor(private cityService:CityService,
				public authService:AuthService) {

	}

	ngOnInit() {
		this.cities$ = this.cityService.getCities();
		this.visitedCities$ = this.cityService.getVisitedCities();
	}

	remove(city){
		this.cityService.removeCity(city);
	}

	// mark city as visited in db
	visited(city){
		this.cityService.visitedCity(city);
	}

	notVisited(city){
		this.cityService.removeVisitedCity(city.$key);
	}

}
