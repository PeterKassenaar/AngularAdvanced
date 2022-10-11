import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{
  // simple component, emitting a keyword to search for
  @Output() search = new EventEmitter<string>()
}
