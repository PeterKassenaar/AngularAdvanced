import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
// Our core- and shared module
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
//components
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Standard Angular modules
    BrowserModule,
    HttpClientModule,
    // Angular Material modules
    BrowserAnimationsModule,
    MaterialModule,
    // Our core- and shared modules
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
