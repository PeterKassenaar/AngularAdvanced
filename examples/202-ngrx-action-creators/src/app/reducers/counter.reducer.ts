// counter.ts - a simple reducer, now with abstracted Counter Actions
import * as fromActions from '../actions/couter.actions';

export function counterReducer(state: number = 0, action: fromActions.All) {
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
