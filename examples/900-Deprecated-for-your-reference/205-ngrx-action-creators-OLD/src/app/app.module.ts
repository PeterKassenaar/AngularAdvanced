import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Store stuff
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './reducers/counter.reducer';

import {AppComponent} from './app.component';
import { ExtraComponent } from './extra/extra.component';


@NgModule({
	declarations: [
		AppComponent,
		ExtraComponent
	],
	imports     : [
		BrowserModule,
		StoreModule.forRoot({counter: counterReducer})
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
