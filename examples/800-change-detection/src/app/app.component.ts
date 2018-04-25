import {Component} from '@angular/core';
import {Person} from './model/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  person: Person = {
    name: '',
    address: ''
  };

  setName(value: string): void {
    this.person.name = value;
  }
}
