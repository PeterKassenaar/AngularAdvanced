import { Component, OnInit } from '@angular/core';
import { City } from '../shared/model/city.model';

@Component({
  selector: 'app-spy',
  templateUrl: './spycomponent.html'
})
export class SpyComponent {
  cities: City[] = [
    new City(1, 'Venlo', 'LB'),
    new City(2, 'Groningen', 'GR'),
    new City(2, 'Amsterdam', 'NH'),
    new City(2, 'Rotterdam', 'ZH')
  ];
  counter = 0;

  addCity(newCity: string) {
    this.cities.push(new City(this.cities.length + 1, newCity, 'Onbekend'));
  }

  increment() {
    this.counter++;
  }

  deleteCity(city: City) {
    this.cities = this.cities.filter(c => c !== city);
  }
}
