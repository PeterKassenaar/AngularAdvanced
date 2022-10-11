import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericListComponent} from "./components/generic-list/generic-list.component";
import { SearchComponent } from './components/search/search.component';


// We only share components through this module. Not interfaces/models and
// services, though they are in this very same directory.
@NgModule({
  declarations: [GenericListComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GenericListComponent,
    SearchComponent
  ]
})
export class SharedModule {
}
