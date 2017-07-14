// This is a View component, AKA Dumb component. It contains no logic, the .ts is super-simple.
// It recieves a city via the @Input() parameter and
// throws events via the @Output decorator.

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {City} from '../../shared/model/city.model';

@Component({
	selector   : 'city-list',
	templateUrl: './city-list.component.html'
})
export class CityListComponent {
	@Input() cities: City[];
	@Output() selectCity: EventEmitter<City>    = new EventEmitter<City>();
	@Output() toggleVisited: EventEmitter<City> = new EventEmitter<City>();
}
