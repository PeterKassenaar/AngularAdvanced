import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router,
				private authService: AuthService) {
	}

	canActivate() {
		return this.authService.authState
			.map(user => {
				if (!user) {
					// user is not authenticated, navigate away
					this.router.navigate(['/'])
				}
				// else: return boolean of the user
				return !!user;
			})
	}
}