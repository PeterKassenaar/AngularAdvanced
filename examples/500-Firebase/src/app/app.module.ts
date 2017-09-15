import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

// Firebase stuff
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Initialize Firebase
let firebaseConfig = {
	apiKey           : "AIzaSyBS4k1rHl-ZERlfrYEHZOnIsI6YVpKWc5g",
	authDomain       : "cities-app-ca4b1.firebaseapp.com",
	databaseURL      : "https://cities-app-ca4b1.firebaseio.com",
	projectId        : "cities-app-ca4b1",
	storageBucket    : "cities-app-ca4b1.appspot.com",
	messagingSenderId: "665325645342"
};

@NgModule({
	imports     : [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule
	],
	declarations: [
		AppComponent
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
