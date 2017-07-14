import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'city-visited',
  templateUrl: './city-visited.component.html',
  styles: []
})
export class CityVisitedComponent {
  @Input() visited:boolean;
  @Output() toggle: EventEmitter<boolean>= new EventEmitter<boolean>();
}
