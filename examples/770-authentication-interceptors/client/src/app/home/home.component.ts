import { Component, OnInit } from '@angular/core';
import {User} from '../shared/model/user.model';
import {first} from 'rxjs/operators';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   this.users = users;
    // });
  }

}
