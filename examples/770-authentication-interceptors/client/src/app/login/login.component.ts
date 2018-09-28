import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // 0. Variables
  loginForm: FormGroup; // using reactive forms here, instead of [(ngModel)]
  loading = false;
  submitted = false;
  returnUrl: string; // as a convenience for the user, returnUrl is a param on the querystring
  error = '';

  // 1. Dependency Injection of FormBuilder, Router stuff and Auth service
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  // 2. Create the FormBuilder.group() on initialization of the component
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // 2a. if the user gets here, make sure he's first logged out
    this.authenticationService.logout();

    // 2b. get the returnUrl from the routeParameters or default to homepage
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  }

  // 3. A getter for our convenience, so we can get access to the form instance by
  // just calling this.f, instead of this.loginForm.controls.... every time
  get f() {
    return this.loginForm.controls;
  }

  // 4. Submit the login form to the backend
  onSubmit() {
    this.submitted = true;

    // 4a. Stop here if the form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // 4b. Set loading indicator
    this.loading = true;

    // 4c. Call login method on the AuthService
    const username = this.f.username.value;
    const password = this.f.password.value;
    this.authenticationService.login(username, password)
      .pipe(first())
      .subscribe(data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }// end onSubmit()
} // end class
