// greeting.service.ts
import {Injectable} from '@angular/core';

@Injectable()
export class GreetingService {

	constructor() {
	}

	greet(name: string): string {
		return `Hi, ${name}`;
	}
}