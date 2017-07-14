export class City{
	constructor(
		public id: number,
		public name: string,
		public province: string,
		public visited : boolean = false,
		public highlights?: string[]
	){	}
}