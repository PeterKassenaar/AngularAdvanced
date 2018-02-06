// reducers.ts, all reducers in this app combinend
import {citiesReducer} from './cities.reducer';

export const appReducer  = {
	city   : citiesReducer
};
