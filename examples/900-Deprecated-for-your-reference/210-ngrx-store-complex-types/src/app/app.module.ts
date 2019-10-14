import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Store Stuff
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// reducer
import {citiesReducer} from './reducers/city.reducer';

// component
import {AppComponent} from './app.component';

// services
import {CityService} from './services/city.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		StoreModule.forRoot({city: citiesReducer}),
		StoreDevtoolsModule.instrument({
			maxAge: 10}) // Redux Devtools debugging in Chrome
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
