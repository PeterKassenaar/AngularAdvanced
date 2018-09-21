// city.actions.ts - two actions, for adding and removing cities from the store
import {City} from '../shared/city.model';

export class AddCity {
  static readonly type = '[CITIES] - Add';

  constructor(public payload: City) {
  }
}

export class RemoveCity {
  static readonly type = '[CITIES] - Remove';

  // we're passing in the id of the city to remove, so it should be a number
  constructor(public payload: number) {
  }
}
