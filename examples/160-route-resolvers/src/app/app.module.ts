import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SimpleResolverComponent } from './simple-resolver/simple-resolver.component';
import { ApiResolverComponent } from './api-resolver/api-resolver.component';
import {HttpClientModule} from '@angular/common/http';
import { NoResolverComponent } from './no-resolver/no-resolver.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
