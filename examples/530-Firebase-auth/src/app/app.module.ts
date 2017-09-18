// Angular stuff
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Firebase stuff
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';

// Services
import {CityService} from './shared/services/city.service';
import {AuthService} from './shared/services/auth.service';

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
	{path: 'edit/:key', component: EditComponent},
];

// Initialize Module
@NgModule({
	imports     : [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		RouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AddComponent,
		EditComponent
	],
	providers   : [CityService, AuthService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
