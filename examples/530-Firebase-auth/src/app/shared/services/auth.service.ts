// auth.service.ts
import {Injectable} from '@angular/core';

// AngularFire stuff
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

	user :Observable<firebase.User>;

	constructor(private firebaseAuth:AngularFireAuth) {
		this.user = this.firebaseAuth.authState;
	}

	// Future use, when signing up with e-mail/password
	signup(email: string, password:string){
		this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
	}

	// Login/Logout : no need to return anything, b/c this will trigger
	// a change of state in this.firebaseAuth.authState;
	login(){
		this.firebaseAuth.auth.signInAnonymously();
	}
	logout(){
		this.firebaseAuth.auth.signOut();
	}

}
