// Angular stuff
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Firebase stuff
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AddComponent} from './components/add/add.component';

// Services
import {CityService} from './shared/services/city.service';

// Initialize Firebase
let firebaseConfig = {
	apiKey           : "AIzaSyBS4k1rHl-ZERlfrYEHZOnIsI6YVpKWc5g",
	authDomain       : "cities-app-ca4b1.firebaseapp.com",
	databaseURL      : "https://cities-app-ca4b1.firebaseio.com",
	projectId        : "cities-app-ca4b1",
	storageBucket    : "cities-app-ca4b1.appspot.com",
	messagingSenderId: "665325645342"
};

// Initialize Routes
const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'home'},
	{path: 'home', component: HomeComponent},
	{path: 'add', component: AddComponent},
];

// Initialize Module
@NgModule({
	imports     : [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		RouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AddComponent
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
