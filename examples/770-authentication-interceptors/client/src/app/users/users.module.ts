import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {RouterModule, Routes} from '@angular/router';

const userRoutes: Routes = [
  {path: '', component: UsersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UsersComponent]
})
export class UsersModule {
}
