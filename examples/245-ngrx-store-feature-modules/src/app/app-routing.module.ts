import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// use lazy loading for modules
const routes: Routes = [
  {path: '', redirectTo: 'counter', pathMatch: 'full'},
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module')
      .then(mod => mod.CounterModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
      .then(mod => mod.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
