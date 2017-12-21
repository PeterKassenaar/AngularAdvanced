// counter.actions.ts
import {Action} from '@ngrx/store';

// *** Action constants
// These are the strings for the action
export const INCREMENT = '[COUNTER] - increment';
export const DECREMENT = '[COUNTER] - decrement';
export const RESET = '[COUNTER] - reset';

// *** Action Creators.
// We're taking a constant and binding it to the type property of our class
// This way we don't have to manually add the type and payload every time in
// the reducers and actions. We simply new up (instantiate) the CounterIncrement class.
// And also - in @ngrx/store v.4 and above, the payload property is gone. We now
// add it back in ourselves.
export class CounterIncrement implements Action {
  readonly type = INCREMENT;
  constructor(public payload?: any) {}
}

export class CounterDecrement implements Action {
  readonly type = DECREMENT;
}

export class CounterReset implements Action {
  readonly type = RESET;
}

export type All = CounterIncrement | CounterDecrement | CounterReset;
