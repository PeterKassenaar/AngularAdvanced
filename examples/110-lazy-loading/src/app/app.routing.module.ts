import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';

// Note: no import from the various components. Only references to
// the modules, containing the components
const routes: Routes = [
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  // New notation for lazy loading (Angular 8+):
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module')
      .then(mod => mod.CustomerModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module')
      .then(mod => mod.ProductsModule)
  },
  // Old notation (Angular 4-7)
  //   {path: 'customers', loadChildren: './customer/customer.module#CustomerModule'},
  //   {path: 'products', loadChildren: './products/products.module#ProductsModule'},
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false, // turn on for console.logging of routing events
  // preloadingStrategy: PreloadAllModules // uncomment to load all modules lazily
};
export const AppRoutingModule = RouterModule.forRoot(routes, config);
