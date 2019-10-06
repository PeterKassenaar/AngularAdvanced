// counter.actions.ts - the Actions for our counter
import {createAction} from '@ngrx/store';

// export our actions as constants

// Increment with an optional payload as property
export const increment = createAction(
  'COUNTER - increment',
  // dispatching a default value '0', if no number is provided
  (num = 0) => ({payload: {num}})
);
export const decrement = createAction('COUNTER - decrement');
export const reset = createAction('COUNTER - reset');
