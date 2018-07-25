import {Component, OnInit} from '@angular/core';
import {CityService} from '../shared/services/city.service';
import {Router} from '@angular/router';
import {City} from '../shared/model/city.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent {

  added = false;

  constructor(private cityService: CityService,
              private router: Router) {
  }

  addCity(name: string, province: string, highlights: string): void {
    const newCity: City = {
      name: name,
      province: province,
      highlights: highlights.split(','),
      rating: 0
    };
    this.cityService.addCity(newCity);
    // show alert and navigate back to homepage after 1,5s.
    this.added = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
