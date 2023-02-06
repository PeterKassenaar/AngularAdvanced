import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // b/c CustomerList component is a standalone component, it is now in the
    // list import:[] instead of declarations: []
    CustomerListComponent,
    CustomerDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
