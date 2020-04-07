import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {User} from '../model/user';
import {UsersState} from '../store/user-reducer';
import {loadUsersStart, loadUsersSuccess} from '../store/user-actions';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<any>;

  constructor(private store: Store<{ users: UsersState }>,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsersStart());
    this.users$ = this.store
      .pipe(
        select(s => s.users.users)
      );
  }

  loadUsers() {
    // fire an http-call -> TODO: this should be in a service or handled via an @Effect
    this.http.get<{ info: any; results: User[] }>(
      'https://randomuser.me/api/?results=10&seed=abc'
    )
      // note how the returned users are passed as props to the loadUsersSuccess action!
      .subscribe((data: any) => this.store.dispatch(loadUsersSuccess({users: data.results}))
    );
  }
}
