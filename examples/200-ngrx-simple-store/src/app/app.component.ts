import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from './appState';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'Simple Store App';
	counter$: Observable<number>;

	constructor(private  store: Store<AppState>) {

	}

	ngOnInit() {
		this.counter$ = this.store.select('counter')
	}

	increment() {
		this.store.dispatch({type: 'INCREMENT'})
	}

	decrement() {
		this.store.dispatch({type: 'DECREMENT'})
	}

	reset() {
		this.store.dispatch({type: 'RESET'})
	}

}
