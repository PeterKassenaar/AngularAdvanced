import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {decrement, increment, reset} from '../counter-store/counter-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = 'Counter Module and Component';
  counter$: Observable<number>;


  constructor(private store: Store<{ count: number }>) {
  }

  ngOnInit(): void {
    // Select the 'count' property from the store and
    // assign it to count$ variable.
    this.counter$ = this.store.pipe(
      select('count')
    );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  addNumber(value: string) {
    this.store.dispatch(increment(+value));
  }
}
