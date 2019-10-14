import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {City} from './shared/models/city.model';
import {CityService} from './shared/services/city.service';
import {select, Store} from '@ngrx/store';
import {LoadCitiesViaEffect} from './store/cities.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  cities$: Observable<City[]>;

  constructor(
    private store: Store<City[]>,
    private cityService: CityService) {
  }

  ngOnInit(): void {
    // Bind observable this.cities$ to  state from the store
    this.cities$ = this.store.pipe(
      select('cities')
    );
    // Load the cities by dispatching an action; the effect listens to it.
    this.store.dispatch(LoadCitiesViaEffect());
  }

  // load initial cities on mouseclick
  loadCities() {
    this.cityService.loadCities();
  }

  // Remove city from store
  removeCity(city) {
    this.cityService.removeCity(city);
  }

  // ******************
  // Workshop
  // ******************
  addCity(city: string) {
    // TODO: add city to store
    alert('TODO: add city: ' + city);
  }

  updateCity(city: City) {
    // TODO...
    alert('TODO: update this city: ' + city.name);
  }

}
