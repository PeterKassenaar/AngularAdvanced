import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {catchError, tap} from 'rxjs/operators';
import {City} from '../models/city.model';
import {loadCities, removeCity} from '../../store/cities.actions';
import {CitiesState, initialState} from '../../store/cities.state';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  // Set up some cities to start with.
  // At a later point these will of course come from an external
  // resource (like a .json file or database)!
  private cities: City[] = [
    {
      id: 1,
      name: 'Groningen',
      province: 'Groningen',
      population: 185000
    },
    {
      id: 2,
      name: 'Hengelo',
      province: 'Overijssel',
      population: 78000
    },
    {
      id: 3,
      name: 'Den Haag',
      province: 'Zuid-Holland',
      population: 345000
    },
    {
      id: 4,
      name: 'Enschede',
      province: 'Grote Markt',
      population: 137000
    },
    {
      id: 5,
      name: 'Heerlen',
      province: 'Limburg',
      population: 67000
    }
  ];

  constructor(private store: Store<CitiesState>) {

  }

  loadCities() {
    this.store.dispatch(loadCities({cities: this.cities}));
  }

  removeCity(city: City) {
    this.store.dispatch(removeCity({city}));
  }

  // *********************** Workshop
  // TODO: add extra methods to add, update cities, etc.

  // ************************ Utility function
  // Create random ID for newly added cities.
  // Note: In real applications we would let a backend do this.
  getRandomId(): number {
    return Math.floor((Math.random() * 10000) + 1);
  }
}
