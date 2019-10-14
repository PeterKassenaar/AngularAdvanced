import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';

// Import all possible actions
import {increment, decrement, reset} from './store/counter/counter.actions';
import {CounterState} from './store/counter/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Simple Store App';
  count$: Observable<number>;
  // WORKSHOP:
  msg$: Observable<string>;


  constructor(private store: Store<{ count, msg }>) {

  }

  ngOnInit() {
    // Select the 'count' property from the store and
    // assign it to count$ variable.
    this.count$ = this.store.pipe(
      select(s => s.count)
    );
    this.msg$ = this.store.pipe(
      select(s => s.msg)
    );
  }

  // dispatch actions for the store. They are imported above
  increment(num: number) {
    // if a number is provided, dispatch the increment action with
    // that number (casted to a number);
    if (num) {
      this.store.dispatch(increment(num));
    } else {
      this.store.dispatch(increment(1));
    }
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
