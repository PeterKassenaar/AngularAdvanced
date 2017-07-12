import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {City} from '../shared/city.model';
import {CityService} from '../shared/city.service';
import {Observable} from 'rxjs/Observable';

@Component({
	selector   : 'app-city-detail',
	templateUrl: './city-detail.component.html'
})
export class CityDetailComponent implements OnInit {

	id: number;
	city: Observable<City>;

	constructor(private route: ActivatedRoute,
				private  cityService: CityService) {
	}

	ngOnInit() {
		this.route.params.subscribe((params: { id: string }) => {
			this.id = +params.id;
			if (this.id === -1) {
				// Default: navigate to first city (or leave empty)
				this.id = 1;
			}
			this.city = this.cityService.getCity(this.id);
		})
	}

}
