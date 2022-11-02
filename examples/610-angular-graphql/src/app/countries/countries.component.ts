import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, debounceTime, filter, finalize, map, of, tap} from "rxjs";

// Queries
import {GET_COUNTRIES_BY_NAME, GET_COUNTRY} from "../graphql/graphql.countries.queries";
import {
  countryDataCountriesEdges,
  singleCountryDataCountriesEdgesNode
} from "../shared/countries.interface";


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

  // 0. Variables - weird name typing, but that's because of automatic generation of interfaces,
  // based on the returned data by the API.
  countries: countryDataCountriesEdges[] = [];
  countryDetail: singleCountryDataCountriesEdgesNode | undefined;
  error: any;
  keyword : string = '';
  loading: boolean = false;

  // 1. Our form
  searchForm = new FormGroup({
    name: new FormControl('', Validators.required),
    includeFlag: new FormControl(true, Validators.required)
  });


  // 2. DI of apollo client
  constructor(private apollo: Apollo) {
  }


  // 3. Initialize listener on the textbox. Search for countries
  // after 1s of inactivity. Only search if there are at least 2 characters.
  ngOnInit(): void {
    this.searchForm.get('name')?.valueChanges
      .pipe(
        filter((keyword: any) => keyword.length >= 2),
        debounceTime(1000)
      )
      .subscribe(keyword => {
        this.keyword = keyword
        this.getCountriesByName(keyword)
      })
  }

  // 4. Query API for countries starting with the given string.
  // See graphql.countries.queries.ts for details
  getCountriesByName(name: string): void {
    this.loading = true;
    this.apollo.query({
      query: GET_COUNTRIES_BY_NAME,
      variables: {
        name: name,
        includeFlag: this.searchForm.value.includeFlag as boolean
      }
    })
      .pipe(
        map((result) => result.data.countries.edges),
        catchError(error => {
          this.error = error;
          return of([])
        }),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: ((countries) => {
          console.log(countries);
          // Check if we found countries
          countries.length === 0 ?
            this.error = `No results found for "${this.searchForm.value.name}"` :
            this.countries = countries
        })
      })

  }

  // 5. Get details for a single country
  getCountryDetails(name: string): void {
    this.loading = true;
    this.apollo.query({
      query: GET_COUNTRY,
      variables: {
        name: name
      }
    })
      .pipe(
        map((result) => result.data.countries.edges),
        catchError(error => {
          this.error = error;
          return of([])
        }),
        finalize(() => this.loading = false)
      ).subscribe({
      next: ((result) => {
        console.log('Country details: ', result);
        this.countryDetail = result[0].node;
      })
    })
  }

  // 6. Reset the form and array with countries
  clearForm(): void {
    this.searchForm.patchValue({
      name: ''
    })
    this.countries = [];
    this.error = '';
    this.countryDetail = undefined
    this.keyword = '';
  }
}
