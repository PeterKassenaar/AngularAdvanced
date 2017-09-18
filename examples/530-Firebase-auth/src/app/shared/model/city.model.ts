// city.model.ts
export interface City {
	id: number;
	name: string;
	province: string;
	highlights: string,
	rating: number,
	$key? : any
}