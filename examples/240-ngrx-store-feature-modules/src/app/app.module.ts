// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users/users.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', loadChildren: './counter/counter.module#CounterModule' },
  { path: 'cities', loadChildren: './cities/cities.module#CitiesModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    // disable StoreDevTools in production
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 20 })
      : [],
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
