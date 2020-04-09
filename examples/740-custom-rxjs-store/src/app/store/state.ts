// state.ts - our interfaces (no implementation)
export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

export interface State {
  todos: Todo[];
  // other slices of the store
  // counter: number;
  // movies: any[]; // TODO - create a IMovie interface or the like
}
