// user-store.actions.ts
import { Action } from '@ngrx/store';
import { User } from '../model/user';

// action constants
export const LOAD_USERS = '[Users] - Load';
export const LOAD_USERS_COMPLETE = '[Users] - Load::complete';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersComplete implements Action {
  readonly type = LOAD_USERS_COMPLETE;
  constructor(public payload: User[]) {}
}

// export a type, to get type-safety on the consumer side
export type All = LoadUsers | LoadUsersComplete;
