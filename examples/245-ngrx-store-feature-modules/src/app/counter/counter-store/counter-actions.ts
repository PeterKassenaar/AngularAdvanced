// counter.actions.ts - the Actions for our counter
import {createAction} from '@ngrx/store';

// export our actions as constants
export const increment = createAction('COUNTER - increment',
  //  2. Dispatching a default value '0', if no number is provided,
  // otherwise, dispatch an object with payload key/value pair
  (num = 1) => ({payload: num}));
export const decrement = createAction('COUNTER - decrement');
export const reset = createAction('COUNTER - reset');
