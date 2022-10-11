export type CountryInfo = Country[];
export interface CountryFlags {
	svg: string;
	png: string;
}
export interface CountryCurrencies {
	code: string;
	name: string;
	symbol: string;
}
export interface CountryLanguages {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}
export interface CountryTranslations {
	br: string;
	pt: string;
	nl: string;
	hr: string;
	fa: string;
	de: string;
	es: string;
	fr: string;
	ja: string;
	it: string;
	hu: string;
}
export interface CountryRegionalBlocs {
	acronym: string;
	name: string;
	otherAcronyms?: string[];
	otherNames?: string[];
}
export interface Country {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	subregion: string;
	region: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number;
	gini: number;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string;
	flags: CountryFlags;
	currencies: CountryCurrencies[];
	languages: CountryLanguages[];
	translations: CountryTranslations;
	flag: string;
	regionalBlocs: CountryRegionalBlocs[];
	cioc: string;
	independent: boolean;
}
