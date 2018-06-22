// counter-store.reducer
import * as fromActions from './counter-store.actions';

// create initial State. Not mandatory (can easily be defined inside the parameterlist of reducer),
// but gives you flexibility in the future, if the state expands.
export const initialState = 0;

export interface CounterState {
  counter: number;
}

export function counterReducer(
  state = initialState,
  action: fromActions.CounterAction
) {
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
