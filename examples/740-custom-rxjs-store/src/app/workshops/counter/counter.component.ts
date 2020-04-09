import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '../../store/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  // ****************
  // workshops - 1
  // Create/add a counter property in the store
  // Create actions to increment, decrement, reset the counter state
  // ****************
  counter$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    // workshop 1 - counter, initialization
    this.store.set('counter', 0); // This is now/can also be done in initialState.ts
    this.counter$ = this.store.select('counter');
  }

  // Actions to alter the store
  increment(num = 0) {
    if (num !== 0) {
      // IF there is a number in the box, update the counter with that
      // number; otherwise update with 1.
      this.store.updateCounter('counter', +num); // reducer
    } else {
      this.store.updateCounter('counter', 1);
    }
  }

  decrement() {
    this.store.updateCounter('counter', -1);
  }

  reset() {
    this.store.set('counter', 0);
  }
}
