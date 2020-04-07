// user-actions.ts - actions for users
import {createAction, props} from '@ngrx/store';
import {User} from '../model/user';

export const loadUsersStart = createAction(
  'LOAD USERS - Start loading users',
);

// On success, this action is dispatched from cities.effects.ts
export const loadUsersSuccess = createAction(
  'LOAD USERS - Load users success',
  props<{ users: User[] }>()
);

// On failure, this action is dispatched from cities.effects.ts
export const loadUsersFail = createAction(
  'LOAD USERS - Load users fail'
);
