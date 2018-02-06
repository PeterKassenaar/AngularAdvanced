//appstate.interface.ts
import {City} from './city.model';

export interface AppState{
	cities: City[];
	selectedCity: City;
}