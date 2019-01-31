import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// custom modules
import {CustomerModule} from './customer/customer.module';
import {ProductsModule} from './products/products.module';

// components
import {AppComponent} from './app.component';
import {IsahModule} from './isah/isah.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		CustomerModule,
		ProductsModule,
		IsahModule
	],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
