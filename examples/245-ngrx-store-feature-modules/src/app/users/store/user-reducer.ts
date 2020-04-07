// user-actions.ts
import {User} from '../model/user';
import {Action, createReducer, on} from '@ngrx/store';
import {loadUsersFail, loadUsersStart, loadUsersSuccess} from './user-actions';
import {of} from 'rxjs';

// Appstate for this feature module - can also be in a separate file

export interface UsersState {
  users: User[];
  loading: boolean;
}

// initial state for the reducer
export const initialState: UsersState = {
  users: [],
  loading: false
};

const reducer = createReducer(
  initialState,
  on(loadUsersStart, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(loadUsersSuccess, (state, payload) => {
    return {
      users: [...payload.users],
      loading: false
    };
  }),
  // todo: loadUserFail
);

export const usersReducer = (
  state: UsersState | undefined,
  action: Action) => {
  return reducer(state, action);
};
export const usersFeatureKey = 'users';
