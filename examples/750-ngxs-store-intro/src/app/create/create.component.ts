// create.component.ts
import {Component} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddCity} from '../actions/city.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  // inject the ngxs-store
  constructor(private store: Store) {
  }

  addCity(id: number, name: string) {
    this.store.dispatch(new AddCity({id: id, name: name}));
  }

}
