import {Component, OnInit} from '@angular/core';
import {
	AngularFireDatabase,
	FirebaseListObservable
} from 'angularfire2/database';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	// Observable to the Firebase List. This is
	// configured
	cities$: FirebaseListObservable<any[]>;

	constructor(private af: AngularFireDatabase) {

	}

	ngOnInit() {
		this.cities$ = this.af.list('/cities');
	}
}
