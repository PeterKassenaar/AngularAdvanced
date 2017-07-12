import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// services and models
import {CityService} from '../shared/city.service';
import {City} from '../shared/city.model';

// rxjs
import {Observable} from 'rxjs/Observable';

@Component({
	selector   : 'app-city-list',
	templateUrl: './city-list.component.html'
})
export class CityListComponent implements  OnInit {

	currentCity: City;
	cities: Observable<City[]>;

	constructor(private router: Router,
				private cityService: CityService) {	}

	ngOnInit(){
		this.cities=this.cityService.getCities();
	}

	selectCity(city: City) {
		console.log('navigate to: ', city.name);
		this.currentCity = city;
		this.router.navigate(['/cities', {outlets: {'detail': [city.id]}}])
	}

}
