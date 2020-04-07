import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {usersFeatureKey, usersReducer} from './store/user-reducer';
import {HttpClientModule} from '@angular/common/http';


export const routes: Routes = [
  {path: '', component: UserListComponent}
];


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    // create a feature store for the users.
    StoreModule.forFeature(usersFeatureKey, usersReducer)
  ]
})
export class UsersModule {
}
