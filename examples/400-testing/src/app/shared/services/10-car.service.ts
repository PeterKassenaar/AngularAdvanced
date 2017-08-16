// greeting.service.ts
import {Injectable} from '@angular/core';
import {Car} from '../model/10-car.model';

@Injectable()
export class CarService {

	createCar(make: string      = 'unknown',
			  model: string     = 'unknown',
			  year: number      = 1900,
			  numWheels: number = 4): Car {
		return new Car(make, model, year, numWheels);
	}

	getCar(car: Car): string {
		return `A ${car.make} ${car.model} from ${car.year} is a fine car!`;
	}

	// other methods...
}