import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../store/state';
import {Store} from '../store/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo$: Observable<Todo[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    // just some dummy data in the store, you can fetch this from a backend of course
    const someTodos: Todo[] = [
      {id: 1, name: 'Get breakfast', done: false},
      {id: 2, name: 'Go coding', done: false},
      {id: 3, name: 'Attend meeting', done: false},
    ];

    this.store.set('todos', someTodos);   // 1. don't set a component property directly! Instead, set data in the store
    this.todo$ = this.store.select<Todo[]>('todos'); // 2. Fetch data from the store, assign it to local property
    console.log(this.store);  // 3. Just some logging, to see if the store works
  }

  // update the state of an item - responsibility of the component.
  // Not from the store. The store just holds the data!
  updateTodo(todo: Todo) {
    // toggle the state of item
    todo.done = !todo.done;
    this.store.updateTodo('todos', todo);
  }
}
