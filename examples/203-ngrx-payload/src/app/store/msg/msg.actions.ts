import {createAction} from '@ngrx/store';


export const setMsg = createAction(
  'MSG - Set Message',
  (msg = '') => ({payload: msg}));
export const resetMsg = createAction(
  'MSG - Clear message')
