// This application is bootstrapped without an ngModule, using *only* standalone
// components. The main.ts-file is updated.
// See https://angular.io/guide/standalone-components#bootstrapping-an-application-using-a-standalone-component
// for more details.
//******************
// Make sure to also update index.html, to use the new selector!
//******************
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {CustomerListComponent} from "./app/customer-list/customer-list.component";

if (environment.production) {
  enableProdMode();
}
// The standalone component is now bootstrapped
bootstrapApplication(CustomerListComponent)
// We can use dependency injection like so, if we want to:
// See https://angular.io/guide/standalone-components#configuring-dependency-injection
// for details
// bootstrapApplication(CustomerListComponent, {
//   providers: [
//     //{provide: BACKEND_URL, useValue: 'https://photoapp.looknongmodules.com/api'},
//     // ...
//   ]
// })
