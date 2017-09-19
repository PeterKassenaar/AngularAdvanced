import {Component, OnInit} from '@angular/core';
import {City} from '../../shared/model/city.model';
import {CityService} from '../../shared/services/city.service';
import {Router} from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
	selector   : 'app-add',
	templateUrl: './add.component.html',
	styles     : []
})
export class AddComponent implements OnInit {

	constructor(private cityService: CityService,
				private router: Router) {
	}

	ngOnInit() {
	}

	addCity(name: string, province: string, highlights: string): void {
		let newCity: City = {
			id        : this.cityService.getRandomId(),
			name      : name,
			province  : province,
			highlights: highlights,
			rating    : 0
		};
		this.cityService.addCity(newCity);
		this.router.navigate(['/']);
	}
	cancel(){
		this.router.navigate(['/']);
	}
}
