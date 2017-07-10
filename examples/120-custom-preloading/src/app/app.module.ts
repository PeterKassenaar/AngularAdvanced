import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// components
import {AppComponent} from './app.component';

// import routing module that defines the LL
import {AppRoutingModule} from './app.routing.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		AppRoutingModule
	],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
