import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Resolver Services
import {SimpleResolverService} from './shared/resolvers/app.resolver.service';
import {ApiResolverComponent} from './api-resolver/api-resolver.component';

// Components
import {HomeComponent} from './home/home.component';
import {SimpleResolverComponent} from './simple-resolver/simple-resolver.component';
import {ApiResolverService} from './shared/resolvers/app.api-resolver.service';
import {NoResolverComponent} from './no-resolver/no-resolver.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'no-resolve',
    component: NoResolverComponent
  },
  {
    path: 'simple',
    component: SimpleResolverComponent,
    resolve: {message: SimpleResolverService}
  },
  {
    path: 'api',
    component: ApiResolverComponent,
    resolve: {data: ApiResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
