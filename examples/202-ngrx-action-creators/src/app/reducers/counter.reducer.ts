// counter.ts - a simple reducer, now with abstracted Counter Actions
import * as fromActions from '../actions/couter.actions';

// create initial State. Not mandatory (can easily be defined inside the parameterlist of reducer),
// but gives you flexibility in the future, if the state expands.
export const initialState: number = 0;

// create an interface as the return type for the reducer. Again, not mandatory,
// but gives you flexibility in the future.
export interface counterState{

}

export function counterReducer(state = initialState,
							   action: fromActions.CounterAction): counterState {
	switch (action.type) {
		case fromActions.INCREMENT:
			return action.payload ? state + action.payload : state + 1;

		case fromActions.DECREMENT:
			return state - 1;

		case fromActions.RESET:
			return 0;

		default:
			return state;
	}
}
