// initialState.ts - initialize the store on startup
import {State, Todo} from './state';

// just some dummy data in the store, you can fetch this from a backend of course.
const someTodos: Todo[] = [
  {id: 1, name: 'Get breakfast', done: false},
  {id: 2, name: 'Go coding', done: false},
  {id: 3, name: 'Attend meeting', done: false},
];

// implementation - this is the startup/initial state of the store
export const initialState: State = {
  todos: someTodos,
  // counter: 0,
  // movies: []
};
