import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CityComponent} from './city/city.component';
import {CityListComponent} from './city-list/city-list.component';
import {CityDetailComponent} from './city-detail/city-detail.component';
import {CityService} from './shared/city.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CityComponent,
		CityListComponent,
		CityDetailComponent
	],
	imports     : [
		BrowserModule,
		AppRoutingModule,
		HttpModule
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
