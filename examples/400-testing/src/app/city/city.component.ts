import {Component, OnInit} from '@angular/core';

@Component({
	selector   : 'app-city',
	templateUrl: './city.component.html',
	styles     : []
})
export class CityComponent implements OnInit {

	city: string;

	constructor() {
	}

	ngOnInit() {
		this.city = 'Groningen';
	}

	setCity(name: string) {
		this.city = name;
	}

}
