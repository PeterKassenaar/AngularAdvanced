import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {City} from '../models/city.model';
import {loadCities, loadCitiesComplete, loadCitiesStart, removeCity} from '../../store/cities.actions';
import {CitiesState, initialState} from '../../store/cities.state';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, delay, finalize, tap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';


// Some stuff that our server (json-server) needs:
const BASE_URL = 'http://localhost:3000/cities';
const HEADERS = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};


@Injectable({
  providedIn: 'root'
})
export class CityService {
  // Inject correct dependencies in the service
  constructor(private store: Store<CitiesState>,
              private http: HttpClient) {
  }

  loadCities() {
    this.http.get(BASE_URL)
      .pipe(
        tap(res => {
          // 1. Set 'loading' to true by dispatching the correct action
          this.store.dispatch(loadCitiesStart())
          console.log('We talked to json-server and received: ', res)
        }),
        catchError(err => {
          console.log('ERROR! Did you forget to start json-server? (npm run json-server)', err);
          return EMPTY;
        }),
        // 2. Simulate delay so loading indicator can be shown.
        delay(2000),
        finalize(() => {
          // 3. Set 'loading' to false by dispatching the correct action
          this.store.dispatch(loadCitiesComplete())
          console.log( 'Getting cities complete...')
        })
      )
      .subscribe((response: City[]) => {
        // 4. Once our server responds, we dispatch data to the store
         this.store.dispatch(loadCities({cities: response}));
      });
  }

  removeCity(city: City) {
    this.http.delete(BASE_URL + `/${city.id}`, HEADERS)
      .subscribe(() => {
        console.log('City removed', city);
        // Optimistic delete - assume everything went fine in the backend,
        // we're deleting the city that was passed in. Otherwise, use the response from json-server
        this.store.dispatch(removeCity({city}));
      });
  }

  // *********************** Workshop
  // TODO: add extra methods to add, update cities, etc.

  addCity(city: City) {
    // TODO....
  }

  updateCity(city: City) {
    // TODO....
  }
}
