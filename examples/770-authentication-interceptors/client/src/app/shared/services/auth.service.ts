// auth.service.ts -
// Authentication agains the NodeJS API.
// Providing a .login() and .logout() method.

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  // 0. Flag, indicating if a user is logged in or not.
  isLoggedInSubject = new BehaviorSubject(this.hasToken()); // assume user is not loggedIn

  constructor(private http: HttpClient) {
  }

  /**
   * this checks if the user has a token in localStorage.
   * In that case the user is considered logged in.
   * TODO: add real auth logic on the server, i.e. to see if the token is still valid.
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  /**
   * Returns the status of user as an observable
   * @returns {Observable<T>}
   */
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // 1. Try to login the passed in user
  login(username: string, password: string) {
    return this.http.post<any>(`${environment.base_url}/users/authenticate`, {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.isLoggedInSubject.next(true);
        }

        return user;
      }));
  }

  // 2. logout the current user
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.isLoggedInSubject.next(false);
  }
}
