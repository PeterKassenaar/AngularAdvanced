import {Routes} from '@angular/router';

export const routes: Routes = [
  // 1. On empty path, start on the home page.
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // 2. All routes in our application. They are lazy loaded,
  // because loadComponent is used instead of the classic loadChildren.
  {
    path: 'home',
    data: { preload: true },
    loadComponent: () => import('./components/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'products',
    data: { preload: true },
    loadComponent: () => import('./components/products/products.component')
      .then(m => m.ProductsComponent)
  },
  {
    path: 'about',
    data: { preload: true },
    loadComponent: () => import('./components/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'very-big',
    // explicitly not preloaded; it will load on demand when navigated
    data: { preload: false },
    loadComponent: () => import('./components/very-big/very-big.component')
      .then(m => m.VeryBigComponent)
  },
  {
    // No match? Redirect to home page.
    // You can also create a FileNotFoundComponent with more information...
    path: '**',
    redirectTo: 'home'
  }
];
