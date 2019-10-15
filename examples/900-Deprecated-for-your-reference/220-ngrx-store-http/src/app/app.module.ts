import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Store stuff
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


// Reducers
import {appReducer} from './reducers/reducers';
// Services
import {CityService} from './services/city.service';

// Components
import {AppComponent} from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot(appReducer), // combined reducers
		StoreDevtoolsModule.instrument({
			maxAge: 10
		}) // Redux Devtools debugging in Chrome
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
