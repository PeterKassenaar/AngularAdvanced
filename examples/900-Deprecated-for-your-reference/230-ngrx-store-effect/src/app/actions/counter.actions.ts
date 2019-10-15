// counter.actions.ts
import { Action } from '@ngrx/store';

export const INCREMENT = '[COUNTER ] - increment';
export const DECREMENT = '[COUNTER ] - decrement';
export const RESET= '[COUNTER ] - reset';

export class CounterIncrement implements Action{
	readonly type = INCREMENT;
}

export class CounterDecrement implements Action{
	readonly type = DECREMENT;
}

export  class CounterReset implements Action{
	readonly type = RESET;
}

export type All = CounterIncrement | CounterDecrement | CounterReset;