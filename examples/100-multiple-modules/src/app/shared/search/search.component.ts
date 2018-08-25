import {Component} from '@angular/core';

@Component({
	selector   : 'app-search',
	templateUrl: './search.component.html',
	styleUrls  : ['./search.component.css']
})
export class SearchComponent {
	searchValue = '';

	doSearch(value): void {
		if (value) {
			this.searchValue = `This is an example of a shared component. It doesn\'t actually search for \"${value}\".`;
		}
		else {
			this.searchValue = '';
		}
	}
}

