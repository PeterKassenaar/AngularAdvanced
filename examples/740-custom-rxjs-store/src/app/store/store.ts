import {BehaviorSubject, Observable} from 'rxjs';

// custom interface
import {State} from './state';
import {distinctUntilChanged, pluck} from 'rxjs/operators';

const state: State = {
  playlist: undefined
};

export class Store {
  // use behaviorsubject to create a subject with initial state
  // the last value is also passed to new subscribers.
  // The behaviorsubject holds the data (i.e. state)
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable()
    .pipe(
      distinctUntilChanged() // make it a little bit smoother, don't overnotify the subscribers
    );

  // internal helper function, return the current
  // value of the subject.
  get value(): any {
    return this.subject.value;
  }

  // set a new piece in the store. Update the
  // current store, using the spread operator
  set(name: string, payload: any): void {
    this.subject.next({
      ...this.value, [name]: payload
    });
  }

  // select a slice from the store, use pluck to only fetch the
  // requested branch of the json-tree from the store
  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      pluck(name)
    );
  }

}
