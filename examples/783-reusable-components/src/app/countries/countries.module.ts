import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryTemplateComponent} from './country-template/country-template.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CountryListComponent,
    CountryTemplateComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [CountryListComponent]
})
export class CountriesModule {
}
