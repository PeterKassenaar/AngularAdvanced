import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {City} from './models/city.model';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // variables
  cities$: Observable<City[]>;
  citiesCollection: AngularFirestoreCollection<City>;

  constructor(private  afs: AngularFirestore) {
  }

  ngOnInit() {
    this.citiesCollection = this.afs.collection(environment.cities_endpoint);
    this.cities$ = this.citiesCollection.valueChanges();
  }
}
