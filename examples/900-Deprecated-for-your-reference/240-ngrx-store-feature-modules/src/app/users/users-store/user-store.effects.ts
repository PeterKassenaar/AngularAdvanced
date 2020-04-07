// user-store.effects.ts
// responsible for actually fetching the data from an API (in this case randomuser.me)
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as userActions from './user-store.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable()
export class UserStoreEffects {
  constructor(private action$: Actions, private http: HttpClient) {}
  @Effect()
  fetchUsers$ = this.action$.ofType(userActions.LOAD_USERS).pipe(
    switchMap(() => {
      // again, not using a service at this time. We *should do that.
      return this.http.get<{ info: any; results: User[] }>(
        'https://randomuser.me/api/?results=10&seed=abc'
      );
    }),
    tap(res => console.log(res)),
    // dispatch the new action from the @Effect()
    map(res => new userActions.LoadUsersComplete(res.results))
  );
}
