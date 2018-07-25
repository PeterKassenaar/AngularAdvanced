import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CityService} from '../../shared/services/city.service';
import {City} from '../../shared/model/city.model';
import {FirebaseObjectObservable} from 'angularfire2/database';

@Component({
	selector   : 'app-edit',
	templateUrl: './edit.component.html',
	styles     : []
})
export class EditComponent implements OnInit {

	key: any;
	city$: FirebaseObjectObservable<City>;

	constructor(private router: Router,
				private route: ActivatedRoute,
				private cityService: CityService) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.key   = params.key;
			this.city$ = this.cityService.getCity(this.key);
			// If you want to log
			// this.city$.subscribe(snapshot => {
			// 	console.log('key: ==>:', snapshot.$key);
			// 	console.log('snapshot ==> ', snapshot);
			// })
		})
	}

	// immediately update any value entered in any textbox.
	update(value: any, field: string) {
		// key must be dynamically assigned, use array[] notation
		// "In JavaScript, every array is an object, but nog every object is an array."
		// https://stackoverflow.com/questions/2462800/how-do-i-create-a-dynamic-key-to-be-added-to-a-javascript-object-variable
		const newVal    = {};
		newVal[field] = value;
		this.cityService.updateCity(newVal);
	}

	back(): void {
		console.log('Already saved...');
		this.router.navigate(['/']);
	}
}



