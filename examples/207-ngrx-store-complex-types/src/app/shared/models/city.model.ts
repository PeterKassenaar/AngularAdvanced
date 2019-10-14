export class City {
	constructor(public id: number       = -1,
				public name: string     = 'unknown',
				public province: string = 'unknown',
				public inhabitants?: number) {
	}
}