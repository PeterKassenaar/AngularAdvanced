// counter.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-store/counter-store.reducer';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  imports: [
    CommonModule,
    // Create the child routes for this module
    RouterModule.forChild(routes),

    // Create the feature store for this module!
    StoreModule.forFeature('counter', counterReducer)
  ],
  declarations: [CounterComponent]
})
export class CounterModule {}
