import {createReducer, on} from '@ngrx/store';
import {resetMsg, setMsg} from './msg.actions';

export const initialMsg = '';
const reducer = createReducer(
  initialMsg,
  on(setMsg, (state, {payload}) => state = payload),
  on(resetMsg, state => initialMsg)
);
export const msgReducer = (state = initialMsg, action) => {
  return reducer(state, action);
};
