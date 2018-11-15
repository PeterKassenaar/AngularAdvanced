import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  randomUsers$: Observable<any[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.randomUsers$ = this.userService.getRandomUsers();
  }

}
