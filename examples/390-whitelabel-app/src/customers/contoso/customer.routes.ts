// customer.routes.ts :: customer CONTOSO
import { Routes } from '@angular/router';
import {ContosoComponent} from './contoso.component';

export const CUSTOMER_ROUTES: Routes = [
  { path: 'dashboard', component: ContosoComponent },
];
