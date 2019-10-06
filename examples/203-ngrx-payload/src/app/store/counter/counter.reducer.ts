// create our reducers to increment/decrement/reset the state

import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset} from './counter.actions';
// import {CounterState} from './counter.state';

// Initial state: counter=0
export const initialState = 0;

// Internal variable/function with reducer.
// It receives a current state from the actual (exported) counterReducer below
const reducer = createReducer(initialState,
  on(increment, (state, {payload}) => state + payload.num),
  on(decrement, state => state - 1),
  on(reset, state => initialState)
);

// The actual reducer function
export const counterReducer = (state = initialState, action) => {
  return reducer(state, action);
};
