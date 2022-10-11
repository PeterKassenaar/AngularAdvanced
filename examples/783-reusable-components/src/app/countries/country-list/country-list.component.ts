import {Component} from '@angular/core';
import {CountryService} from "../../shared/services/country.service";
import {Observable} from "rxjs";
import {Country} from "../../shared/models/country.interface";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html'
})
export class CountryListComponent {

  country$!: Observable<Country[]>

  constructor(private countryService: CountryService) {

  }

  getCountries(keyword: string) {
    this.country$ = this.countryService.searchCountries(keyword)
  }
}
