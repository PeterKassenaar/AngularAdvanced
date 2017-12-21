// Here, 'cities' is our reducer.
// It is a function which takes a state and an action and returns a new state.
// If you use store.select('cities') in your application,
// it actually looks for this reducer!

/*
* what is an action? It is an object with a type and a paylod.
* It is also typed in the @ngrx/store library, therefore we can import it:
* {
* 	type : string,
*  	payload? : any
* }
* */

//city.reducer.ts
import {Action, combineReducers} from '@ngrx/store';
import {ACTIONS} from './city.actions';
import {City} from './city.model';
import {AppState} from './appstate.interface';

// Reducer for the list of cities
const citiesReducer = (state = [], action: Action): City[] => {
    console.log('State:::', state);
    console.log('Action:::', action);
    switch (action.type) {
        case ACTIONS.LOAD_CITIES: {
            return [...action.payload];
        }
        case ACTIONS.ADD_CITY: {
            // add the payload (= a new city) to the
            // already existing state and return it as a new object/array.
            return [
                ...state,
                action.payload
            ];
        }
        case ACTIONS.REMOVE_CITY: {
            return state.filter(city => city !== action.payload);
        }
        case ACTIONS.EDIT_CITY: {
            let index = state.indexOf(action.payload['oldValue']);
            if (index !== -1) {
                state[index] = action.payload['newValue'];
            }
            return Array.prototype.concat(state);
        }
        default: {
            // return unaltered state
            return state;
        }
    }
};

// Reducer for the currently selected City
const selectedCityReducer = (state: any = null, action: Action): City => {
    switch (action.type) {
        case ACTIONS.SELECT_CITY: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

// appReducer, combine reducers to be supplied in app.module.ts.
// Note: the shape of AppState must be reflected in the shape of combineReducers().
export function appReducer(state: AppState, action: Action): AppState {
    const reducer = combineReducers({
        cities: citiesReducer,
        selectedCity: selectedCityReducer
    });
    return reducer(state, action);
}