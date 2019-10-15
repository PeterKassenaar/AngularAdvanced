import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';

// Store stuff
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// Reducers
import {appReducer} from './reducers/reducers';
// Services
import {CityService} from './services/city.service';

// Effects
import {EffectsModule} from '@ngrx/effects';
import { effects } from './effects/index';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot(appReducer), // combined reducers
		EffectsModule.forRoot(effects),	// exported effects
		StoreDevtoolsModule.instrument({
				maxAge: 10}) // Redux Devtools debugging in Chrome
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
