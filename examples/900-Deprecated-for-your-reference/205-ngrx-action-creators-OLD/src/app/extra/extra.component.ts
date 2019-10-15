import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../appState';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html'
})
export class ExtraComponent implements OnInit {

  counterObservable$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.counterObservable$ = this.store.select('counter');
  }

}
