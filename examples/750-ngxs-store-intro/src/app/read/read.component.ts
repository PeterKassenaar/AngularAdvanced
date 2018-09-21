// read.component.ts - read data from the store
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {City} from '../shared/city.model';
import {Select, Store} from '@ngxs/store';
import {RemoveCity} from '../actions/city.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html'
})
export class ReadComponent implements OnInit {
  city$: Observable<City>;

  // Even shorter would be to use the @Select() decorator.
  // In that case you don't need the line above and the one in ngOnInit()
  // @Select(CityState.getCities)
  // city$: Observable<City>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.city$ = this.store.select(state => state.cities.cities);
  }

  removeCity(id: number) {
    this.store.dispatch(new RemoveCity(id));
  }
}
