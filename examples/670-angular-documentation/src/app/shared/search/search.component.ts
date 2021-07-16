import {Component, OnInit} from '@angular/core';

/**
 * This is a Compodoc demonstration: see https://compodoc.app/ for details.
 * This is the Component selector for the SearchComponent Class
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';

  /**
   * Represents the SearchComponent Class
   * @Constructor
   */
  constructor(/*DI services will be documented as Parameters*/) {

  }

  /**
   * Search for a specific keyword. Pass in the keyword to search for
   * @param value {string} the keyword to search for
   */
  doSearch(value: string): void {
    if (value) {
      this.searchValue = `This is an example of a shared component. It doesn\'t actually search for \"${value}\".`;
    } else {
      this.searchValue = '';
    }
  }
}

