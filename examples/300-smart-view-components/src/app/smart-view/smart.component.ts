import { Component, OnInit } from '@angular/core';
import { City } from '../shared/model/city.model';
import { CityService } from '../shared/services/city.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styles: []
})
export class SmartComponent implements OnInit {
  // Properties of the component/class
  currentCity: City;
  cities: City[];
  visitedCities: City[];
  cityPhoto: string;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService.getCities().subscribe(cities => (this.cities = cities));
  }

  getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }

  // toggle visited or not visited
  toggleCity(city: City) {
    this.cities.map(c => {
      if (c.id === city.id) {
        c.visited = city.visited;
      }
    });
    this.visitedCities = this.cities.filter(city => city.visited);
  }
}
