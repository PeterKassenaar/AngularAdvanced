// Person.model.ts
export class Person {
	constructor(public name?: string,
				public email?: string) {
	}

	sayHello(): string {
		return `Hi, ${this.name}`;
	}
}
