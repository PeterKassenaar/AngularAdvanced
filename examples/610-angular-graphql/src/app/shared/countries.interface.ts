// Types for a list of countries. Generated with Json2TypeScript plugin.
// Hence the weird naming. But it is all based on the (nested) structure
// you get back from the API. So you're dependent on that.
// I changed 'RootObject' for 'countryData'

export type CountriesInterface = {
	data: countryData;
}
export type countryDataCountriesEdgesNodeLanguagesEdgesNode = {
	name: string;
}
export type countryDataCountriesEdgesNodeLanguagesEdges = {
	node: countryDataCountriesEdgesNodeLanguagesEdgesNode;
}
export type countryDataCountriesEdgesNodeLanguages = {
	edges: countryDataCountriesEdgesNodeLanguagesEdges[];
}
export type countryDataCountriesEdgesNode = {
	name: string;
	capital: string;
	languages: countryDataCountriesEdgesNodeLanguages;
	flag: string;
}
export type countryDataCountriesEdges = {
	node: countryDataCountriesEdgesNode;
}
export type countryDataCountries = {
	edges: countryDataCountriesEdges[];
}
// This one is used:
export type countryData = {
	countries: countryDataCountries;
}
//*****************
// Types for a single country. Generated with Json2TypeScript plugin. See above
//*****************
export type singleCountry = {
	data: singleCountryData;
}
export type singleCountryDataCountriesEdgesNodeLanguagesEdgesNode = {
	name: string;
}
export type singleCountryDataCountriesEdgesNodeLanguagesEdges = {
	node: singleCountryDataCountriesEdgesNodeLanguagesEdgesNode;
}
export type singleCountryDataCountriesEdgesNodeLanguages = {
	edges: singleCountryDataCountriesEdgesNodeLanguagesEdges[];
}
export type singleCountryDataCountriesEdgesNode = {
	name: string;
	capital: string;
	languages: singleCountryDataCountriesEdgesNodeLanguages;
	flag: string;
	region: string;
	subregion: string;
	population: number;
}
export type singleCountryDataCountriesEdges = {
	node: singleCountryDataCountriesEdgesNode;
}
export type singleCountryDataCountries = {
	edges: singleCountryDataCountriesEdges[];
}
// This one is used:
export type singleCountryData = {
	countries: singleCountryDataCountries;
}

//****************
// The type of the variables we send with the query.
// Again, technically this is not mandatory, but it gives
// us better type safety.
//*****************
export type countryDataVariables = {
  name: string;
  includeFlag?: boolean;
}
