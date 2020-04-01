import {Component, OnInit} from '@angular/core';
import {Store} from './store/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todo$: Observable<any>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    // just some dummy data in the store, no typing (yet)
    this.store.set('todos', [{id: 1, name: 'eat pizza'}, {id: 2, name: 'do washing'}]);
    this.todo$ = this.store.select('todos');
    console.log(this.store);
  }
}
