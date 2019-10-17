import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Components
import {AppComponent} from './app.component';
import {Card1Component} from './card1/card1.component';
import {Card2Component} from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { Card5Component } from './card5/card5.component';
import { MyButtonComponent } from './my-button/my-button.component';

@NgModule({
	declarations: [
		AppComponent,
		Card1Component,
		Card2Component,
		Card3Component,
		Card4Component,
		NewsletterComponent,
		Card5Component,
		MyButtonComponent
	],
	imports     : [
		BrowserModule
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
