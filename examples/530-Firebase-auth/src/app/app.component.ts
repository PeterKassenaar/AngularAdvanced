import {Component} from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(public authService: AuthService,
				private router: Router) {
	}

	// Use anonymous login for now.
	login() {
		this.authService.login();
	}

	// Logout and navigate back to home page
	logout() {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}
