import {Component} from '@angular/core';
import {AuthService} from './shared/services/auth.service';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(public authService:AuthService){

	}

	login(){
		this.authService.login();
	}
	logout(){
		this.authService.logout();
	}
}
