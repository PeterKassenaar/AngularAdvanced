// car.model.ts
export class Car {
	constructor(public make?: string,
				public model?: string,
				public year?: number,
				public numWheels?: number) {
	}

	description(): string {
		return `This is a ${this.make} ${this.model} 
			from ${this.year} and it has ${this.numWheels} wheels`;
	}
	getWheels():number{
		return this.numWheels;
	}
	// other methods...
}
