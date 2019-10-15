// counter.actions.ts - the Actions for our counter
import {createAction} from '@ngrx/store';

// export our actions as constants
// 1. Increment with an optional payload as property
export const increment = createAction(
  'COUNTER - increment',
  //  2. Dispatching a default value '0', if no number is provided,
  // otherwise, dispatch an object with payload key/value pair
  (num = 0) => ({payload: num})
);
// 3. rest of the actions: no payload provided.
export const decrement = createAction('COUNTER - decrement');
export const reset = createAction('COUNTER - reset');
