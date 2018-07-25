import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {City} from '../shared/model/city.model';
import {CityService} from '../shared/services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cities$: Observable<City[]>;

  constructor(private  afs: AngularFirestore, private cityService: CityService) {
  }

  ngOnInit() {
    this.cities$ = this.cityService.getCities();
  }

  // remove/delete a city
  removeCity(id: string) {
    if (confirm('Removing a city cannot be undone. Proceed?')) {
      this.cityService.removeCity(id);
    }
  }

}
