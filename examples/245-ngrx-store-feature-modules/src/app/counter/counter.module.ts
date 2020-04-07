import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterComponent} from './counter/counter.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {counterFeatureKey, counterReducer} from './counter-store/counter-reducer';

const routes: Routes = [{path: '', component: CounterComponent}];


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Import store Feature module, notice that the feature key is abstracted here, inside the reducer,
    // otherwise the workings are the same as with a root store.
    StoreModule.forFeature(counterFeatureKey, counterReducer)
  ],

})
export class CounterModule {
}
