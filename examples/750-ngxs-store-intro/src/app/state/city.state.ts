// city.state.ts - A key difference between Ngrx and Ngxs is how the state is handled.
// The state file(s) in Ngxs take the place of reducers in Ngrx.
// This is done by utilizing various decorators.

// 1. imports
import {City} from '../shared/city.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddCity, RemoveCity} from '../actions/city.actions';

// 2. State model - add properties per your own need
export class CityStateModel {
  cities: City[];
}

// 3. @State decorator to define a name and default values based on the state model
@State<CityStateModel>({
  name: 'cities',
  defaults: {
    cities: []
  }
})
export class CityState {
  // 4. @Selector decorator to create functions to return data, or specific slices of data
  // Here, we're returning all cities, but you can add mapping, filtering, etc. to transform
  // the data befor it's returned.
  @Selector()
  static getCities(state: CityStateModel) {
    return state.cities;
  }

  // 5. @Action Decorator to handle dispatched actions. Here we are defining two actions, for
  // adding and removing cities. Both require a payload (in our use case).
  // You can use .getState(), .setState() and .patchState()
  @Action(AddCity)
  add({getState, patchState}: StateContext<CityStateModel>, {payload}: AddCity) {
    const state = getState();
    patchState({
      cities: [...state.cities, payload]
    });
  }

  @Action(RemoveCity)
  remove({getState, patchState}: StateContext<CityStateModel>, {payload}: RemoveCity) {
    patchState({
      cities: getState().cities.filter(c => c.id !== payload)
    });
  }

}
