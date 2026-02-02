// app.routes.ts
import { Routes } from '@angular/router';
import { loadCustomerRoutes } from './customer-loader';

export const CORE_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },

  // placeholder: is being replaced during init! (see app.config.ts)
  { path: 'customer', children: [] },

  { path: '**', redirectTo: 'home' },
];
