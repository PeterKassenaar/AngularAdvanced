import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

// Guard(s)
import {AuthGuard} from './shared/guards/auth.guard';

// Routes in the application
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
