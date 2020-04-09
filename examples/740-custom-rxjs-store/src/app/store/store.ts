// store.ts
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, pluck, tap} from 'rxjs/operators';

// custom interface and implementation
import {State, Todo} from './state';
// import {initialState} from './initialState';

const initialState: State = {
  todos: undefined
};

// store class
export class Store {
  // 1. use behaviorsubject to create a subject with initial state
  // the last value is also passed to new subscribers.
  // The behaviorsubject holds the data (i.e. state)
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable()
    .pipe(
      distinctUntilChanged() // make it a little bit smoother, don't overnotify the subscribers
    );

  // 2. internal helper function, return the current
  // value of the subject.
  get value(): any {
    return this.subject.value;
  }

  // 3. Set a new piece in the store. Update the
  // current store, using the spread operator (favor immutability)
  set(name: string, payload: any): void {
    this.subject.next({
      ...this.value, [name]: payload
    });
    console.log('current store: ', this.value);
  }

  // 4. select a slice from the store, use pluck to only fetch the
  // requested branch of the json-tree from the store/
  // Generic type <T>
  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      // operator 'pluck'
      pluck(name),
    );
  }

  // 5. Update the store, in this case a list of todos
  // in ngrx this is called a 'reducer'. In our simple custom store we
  // have to write our own reducers for every action we want to perform on
  // the store.
  updateTodo(name: string, payload: Todo): void {
    // 1. fetch the correct slice from the store (even if we only have one)
    const value = this.value[name];
    const newTodos: Todo[] = value.map((todo: Todo) => {
      // 2. loop over our todos and update the given item
      if (payload.id === todo.id) {
        return {...todo, ...payload};
      } else {
        return todo;
      }
    });
    // 3. Set the store with the new value of newTodos
    this.set(name, newTodos);
    // 4. Optional - write state to localStorage, save todos in backend, etc.
  }

  // *********************
  // BELOW HERE: Workshops
  // Try it yourself first!
  // *******************

  // Workshop 1 - updateCounter, to update the counter property in the store
  updateCounter(name: string, payload: number) {
    const value = this.value[name];
    this.set('counter', value + payload);
  }

  // Workshop 2 - update our movies with movie details
  updateMovies(name: string, payload: any): void {
    // get the current value for the requested branch
    const value = this.value[name];
    console.log(value);

    const newMovies = value.map(movie => {
      if (payload.imdbID === movie.imdbID) {
        return {...movie, ...payload};
      } else {
        return movie;
      }
    });
    this.set(name, newMovies);
  }
}
