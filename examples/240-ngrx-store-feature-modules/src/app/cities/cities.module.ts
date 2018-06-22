import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { citiesReducer } from './cities-store/cities-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CitiesStoreEffects } from './cities-store/cities-store.effects';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [{ path: '', component: CitiesComponent }];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('cities', citiesReducer),
    EffectsModule.forFeature([CitiesStoreEffects])
  ],
  declarations: [CitiesComponent]
})
export class CitiesModule {}
