import { Component } from '@angular/core';
import {Car} from './shared/model/10-car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	carSelection:string;
  onCarSelected(car: Car):void{
    this.carSelection = `${car.make} ${car.model} (${car.year})`
  }
}
