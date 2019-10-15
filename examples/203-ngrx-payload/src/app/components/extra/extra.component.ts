import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

// Create an interface for the AppState (instead of declaring it inline)
export interface AppState {
  counter: number;
}

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html'
})
export class ExtraComponent implements OnInit {

  // The counter observable
  counterObservable$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  // Select the counter from the store
  ngOnInit() {
    this.counterObservable$ = this.store.pipe(
      select(s => s.counter)
    );
  }

}
