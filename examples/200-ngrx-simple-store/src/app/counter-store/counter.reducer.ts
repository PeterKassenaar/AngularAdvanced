// create our reducers to increment/decrement/reset the state

import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset} from './counter.actions';

// Initial state: counter=0
export const initialState = 0;

// Internal variable/function with reducers. It is prefixed by _ to indicate
// that it is private. It receives a state from the actual (exported) counterReducer below
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);

// The actual reducer function
export const counterReducer = (state, action) => {
  return _counterReducer(state, action);
};
