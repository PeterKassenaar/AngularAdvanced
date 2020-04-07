// Import store stuf and available actions
import {Action, createReducer, on} from '@ngrx/store';
import {decrement, increment, reset} from './counter-actions';

// Initial state: counter=0
export const initialState = 0;

// Internal variable/function with reducers. It receives a state from
// the actual (exported) counterReducer below
const reducer = createReducer(initialState,
  on(increment, (state, {payload}) => state + payload),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);

// The exported reducer function is necessary
// as function calls are not supported by the AOT compiler.
export const counterReducer = (state = 0, action: Action) => {
  return reducer(state, action);
};

// export the name under which this slice of state lives, in this case 'count', so we can
// benefit from static typing when importing this module.
// See https://ngrx.io/guide/store/reducers
export const counterFeatureKey = 'count';
