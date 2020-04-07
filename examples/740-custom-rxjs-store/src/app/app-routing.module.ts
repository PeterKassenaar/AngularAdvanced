import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';

// Workshops!
import {CounterComponent} from './workshops/counter/counter.component';
import {MovieComponent} from './workshops/movie/movie.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'movies',
    component: MovieComponent
  },
];
export const AppRoutingModule = RouterModule.forRoot(routes);
