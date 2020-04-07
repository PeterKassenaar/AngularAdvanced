// counter-store.actions.ts
// import Action interface for static typing later on
import { Action } from '@ngrx/store';

// *** Action constants
// These are the strings for the action
export const INCREMENT = '[COUNTER] - increment';
export const DECREMENT = '[COUNTER] - decrement';
export const RESET = '[COUNTER] - reset';

// *** Action Creators.
export class CounterIncrement implements Action {
  readonly type = INCREMENT;
  constructor(public payload?: number) {}
}

export class CounterDecrement implements Action {
  readonly type = DECREMENT;
}

export class CounterReset implements Action {
  readonly type = RESET;
}

// Export action types, so they can be used in the reducers
export type CounterAction = CounterIncrement | CounterDecrement | CounterReset;
