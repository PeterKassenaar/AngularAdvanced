// app.component.ts
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from './appState';
import * as fromActions from './actions/couter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Store App - with Action Creators';
  counter$: Observable<number>;

  constructor(private  store: Store<AppState>) {

  }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(new fromActions.CounterIncrement());
  }

  decrement() {
    this.store.dispatch(new fromActions.CounterDecrement());
  }

  reset() {
    this.store.dispatch(new fromActions.CounterReset());
  }

  // Add a specific number to the counter in the store
  addNumber(txtNumber: string) {
    this.store.dispatch(new fromActions.CounterIncrement(+txtNumber));
  }
}
