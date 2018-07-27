import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {City} from '../shared/model/city.model';
import {CityService} from '../shared/services/city.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    img {
      width: 150px;
    }
  `]
})
export class HomeComponent implements OnInit {

  cities$: Observable<City[]>;
  citiesSorted$ = new BehaviorSubject<string>('name');
  queryObservable;

  constructor(private  afs: AngularFirestore, private cityService: CityService) {
  }

  ngOnInit() {
    this.cities$ = this.cityService.getCities();

    // using observables.
    // Create the observable, and run the query every time (using switchMap) a new value comes in.
    // this is 'automagically' done, b/c citiesSorted$ is of type BehaviorSubject
    this.queryObservable = this.citiesSorted$.pipe(
      switchMap((name: string) => {
        return this.afs.collection(environment.cities_endpoint, ref => ref.orderBy(name, 'asc'))
          .valueChanges();
      })
    );
    // subscribe to observable, logging not really necessary. But you HAVE to subscribe.
    this.queryObservable.subscribe(items => {
      console.log({items});
    });
  }

  // remove/delete a city
  removeCity(id: string) {
    if (confirm('Removing a city cannot be undone. Proceed?')) {
      this.cityService.removeCity(id);
    }
  }

  // sort our cities in a simple way.
  sort(key: string | null) {
    // sort via the service
    this.cityService.sortCities(key);
    // create a new subscription, as the old one is immutable
    this.cities$ = this.cityService.getCities();
  }

  // Sort our cities using observables.
  // It CAN be done more elegant, by using abservable BehaviorSubject and Switchmap, see
  // https://github.com/angular/angularfire2/blob/master/docs/firestore/querying-collections.md
  sortObservable(key: string) {
    this.citiesSorted$.next(key);
    this.cities$ = this.queryObservable;
  }


}
