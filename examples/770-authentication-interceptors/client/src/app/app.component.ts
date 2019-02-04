import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AuthenticationService} from './shared/services/auth.service';
import {delay, share} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = of(false); // initialize the user as 'logged out'

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn()
      .pipe(
        delay(0), // b/c of : https://blog.angular-university.io/angular-debugging/
        share()
      );
  }

}
