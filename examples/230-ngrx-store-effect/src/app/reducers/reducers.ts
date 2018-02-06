// reducers.ts, all reducers in this app combinend
import {citiesReducer} from './cities.reducer';
import {counterReducer} from './counter.reducer';

export const appReducer  = {
	city   : citiesReducer,
	counter: counterReducer
};
