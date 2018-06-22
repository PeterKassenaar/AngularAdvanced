// users.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users-store/user-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './users-store/user-store.effects';

export const routes: Routes = [{ path: '', component: UserListComponent }];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // Setting the slice of the store for this feature module
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UserStoreEffects]),
    // setting up child routing
    RouterModule.forChild(routes)
  ],
  declarations: [UserListComponent]
})
export class UsersModule {}
