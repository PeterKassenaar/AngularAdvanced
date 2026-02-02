// customer.routes.ts :: customer ACME
import { Routes } from '@angular/router';
import { AcmeComponent } from './acme.component';

export const CUSTOMER_ROUTES: Routes = [
  { path: 'dashboard', component: AcmeComponent },
];
