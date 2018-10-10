import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SimpleResolverComponent} from './simple-resolver/simple-resolver.component';
import {NoResolverComponent} from './no-resolver/no-resolver.component';
import {ApiResolverComponent} from './api-resolver/api-resolver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleResolverComponent,
    ApiResolverComponent,
    NoResolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
