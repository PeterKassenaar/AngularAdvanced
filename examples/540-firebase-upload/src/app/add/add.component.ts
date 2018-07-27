import {Component, OnInit} from '@angular/core';
import {CityService} from '../shared/services/city.service';
import {Router} from '@angular/router';
import {City} from '../shared/model/city.model';
import {AngularFireStorage} from 'angularfire2/storage';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent {

  added = false;
  newCity: City = {};

  constructor(private cityService: CityService,
              private afStorage: AngularFireStorage,
              private router: Router) {
  }

  addCity(name: string, province: string, highlights: string): void {
    // assign properties
    this.newCity.name = name;
    this.newCity.province = province;
    this.newCity.rating = 0;
    this.newCity.highlights = highlights.split(',');

    // post the new city to firebase via Service
    this.cityService.addCity(this.newCity);

    // show alert and navigate back to homepage after 1,5s.
    this.added = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  // The user uploaded an image for this city. Store it in the newCity object.
  onUploaded(url: string) {
    this.newCity.img = url;
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
