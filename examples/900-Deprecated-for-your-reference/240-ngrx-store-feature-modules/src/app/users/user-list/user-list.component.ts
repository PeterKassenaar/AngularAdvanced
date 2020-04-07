import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersState } from '../users-store/user-store.reducer';
import { Store } from '@ngrx/store';
import * as fromUsers from '../users-store/user.store';
import { LoadUsers } from '../users-store/user-store.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(public store: Store<UsersState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    // the selector from users.store, not from the reducer itself. Allows for decoupling, but adds an extra layer of complexity
    this.users$ = this.store.select(fromUsers.getUserEntities);
  }
}
