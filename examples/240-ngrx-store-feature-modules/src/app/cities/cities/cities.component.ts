import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city.model';
import { Store } from '@ngrx/store';
import { CityState } from '../cities-store/cities-store.reducer';
import * as fromCityActions from '../cities-store/cities-store.actions';
import * as fromCityStore from '../cities-store/cities.store';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities$: Observable<City[]>;
  constructor(private store: Store<CityState>) {}

  ngOnInit() {
    this.store.dispatch(new fromCityActions.LoadCities());
    // Here, we use the feature selector to select specific
    // slices of the complete State.
    this.cities$ = this.store.select(fromCityStore.getCityEntities);
  }
}
