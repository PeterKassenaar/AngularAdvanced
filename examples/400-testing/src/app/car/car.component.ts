import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {Car} from '../shared/model/10-car.model';

@Component({
	selector   : 'app-car',
	templateUrl: './car.component.html',
	styles     : [`
        :host {
            display : block;
            border  : 1px solid black;
            padding : 4px;
            margin  : 4px;
        } `
	]
})
export class CarComponent implements OnInit {

	@Output() selectedCar: EventEmitter<Car> = new EventEmitter<Car>();
			  cars: Car[];

	ngOnInit() {
		this.cars = [
			new Car('Toyota', 'Prius', 2017, 4),
			new Car('Volvo', 'Truck', 2004, 8)
		];
	}

	selectCar(car: Car) {
		this.selectedCar.emit(car);
	}

}
