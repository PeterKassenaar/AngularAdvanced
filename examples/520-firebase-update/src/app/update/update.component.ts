import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CityService} from '../shared/services/city.service';
import {Observable} from 'rxjs';
import {City} from '../shared/model/city.model';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {
  city$: Observable<City>;
  cityId: string;
  added = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cityService: CityService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityId = params.get('id');
      this.city$ = this.cityService.getCity(this.cityId)
        .valueChanges()
        .pipe(
          map(city => city as City) // casting not really necessary, but we want intellisense on the type
        );
    });
  }

  updateCity(name: string, province: string, highlights: string, rating: number) {
    const updatedCity: City = {
      name: name,
      province: province,
      highlights: highlights.split(','),
      rating: rating
    };
    this.cityService.updateCity(this.cityId, updatedCity);
    this.added = true;
    // navigate back to homepage after 1,5s.
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
