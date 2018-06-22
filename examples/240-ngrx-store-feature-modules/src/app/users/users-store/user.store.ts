// users.store.ts
import * as fromUsersStore from './user-store.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUsersFeatureState = createFeatureSelector<
  fromUsersStore.UsersState
>('users');

export const getUserEntities = createSelector(
  getUsersFeatureState,
  fromUsersStore.getUserEntities
);
