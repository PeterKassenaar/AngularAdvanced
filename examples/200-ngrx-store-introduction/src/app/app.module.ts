import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

// reducer
import {citiesReducer} from './city.reducer';

// component
import {AppComponent} from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		StoreModule.provideStore({citiesReducer})
	],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
