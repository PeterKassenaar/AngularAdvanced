// counter.reducer.ts

import * as fromActions from '../actions/counter.actions';

export const initialState = 0;

export function counterReducer(state = initialState, action: fromActions.All) {
	switch (action.type) {
		case fromActions.INCREMENT: {
			return state + 1;
		}
		case fromActions.DECREMENT : {
			return state - 1;
		}
		case fromActions.RESET : {
			return 0;
		}
		default:
			return state;
	}
}