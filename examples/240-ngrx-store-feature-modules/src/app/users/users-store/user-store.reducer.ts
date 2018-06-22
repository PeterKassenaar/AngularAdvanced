// user-store.reducer.ts
import { User } from '../model/user';
import * as fromUserActions from './user-store.actions';

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
export function usersReducer(
  state: UsersState = initialState,
  action: fromUserActions.All
): UsersState {
  switch (action.type) {
    case fromUserActions.LOAD_USERS: {
      return {
        ...state,
        loading: true // just set the flag to true. The action will be handled by effects
      };
    }
    case fromUserActions.LOAD_USERS_COMPLETE: {
      return {
        ...state,
        users: action.payload, // these are the users, returned from the datasource
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getUserEntities = (state: UsersState) => state.users;
