import { Component, OnInit } from '@angular/core';
import * as fromActions from '../counter-store/counter-store.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter-store/counter-store.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title = 'Store App - with Feature modules and partial stores';
  counter$: Observable<number>;

  constructor(private store: Store<CounterState>) {}

  ngOnInit() {
    this.counter$ = this.store.select(s => s.counter);
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
