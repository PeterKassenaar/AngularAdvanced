import {Routes} from '@angular/router';

export const routes: Routes = [
  // 1. On empty path, start on the home page.
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // 2. All routes in our application. They are lazy loaded,
  // because loadComponent is used instead of the classic loadChildren.
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component')
      .then(m => m.ProductsComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    // No match? Redirect to home page.
    // You can also create a FileNotFoundComponent with more information...
    path: '**',
    redirectTo: 'home'
  }
];
