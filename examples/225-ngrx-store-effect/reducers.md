# Cities Reducer Documentation

## Overview
The cities reducer is part of an NgRx state management implementation for managing a collection of city data in an Angular application. It handles state changes in response to various actions related to city data operations, including loading states.

## File Structure
The reducer is defined in `cities.reducer.ts` and works with the following related files:
- `cities.actions.ts`: Defines the actions that can be dispatched to modify the state
- `cities.state.ts`: Defines the initial state and error state
- `city.model.ts`: Defines the City model structure
- `cities.effects.ts`: Handles side effects like API calls and dispatches actions

## City Model
The City model contains the following properties:
- `id`: number (default: -1)
- `name`: string (default: 'unknown')
- `province`: string (default: 'unknown')
- `population`: optional number

## State Structure
The CitiesState interface includes:
- `cities`: An array of City objects
- `loading`: A boolean indicating whether cities are currently being loaded

## Initial State
The initial state of the reducer contains:
```typescript
{
  cities: [
    {
      id: -1,
      name: 'Unknown City',
      province: 'Unknown Province'
    }
  ],
  loading: false
}
```

## Error State
When an error occurs during city loading, the state is set to:
```typescript
{
  cities: [
    {
      id: -1,
      name: 'ERROR!',
      province: 'Oops, something bad happened...'
    }
  ],
  loading: false
}
```

## Actions Handled

### 1. startLoading
- **Action Type**: 'CITIES - Start loading'
- **Behavior**: Sets the loading state to true

### 2. endLoading
- **Action Type**: 'CITIES - End loading'
- **Behavior**: Sets the loading state to false

### 3. loadCitiesSuccess
- **Action Type**: 'CITIES - Load cities success'
- **Payload**: An array of City objects
- **Behavior**: Replaces the cities array with the provided array

### 4. loadCitiesFail
- **Action Type**: 'CITIES - Load cities fail'
- **Behavior**: Replaces the cities array with the error city array

### 5. removeCity
- **Action Type**: 'CITIES - Remove city'
- **Payload**: A City object to remove
- **Behavior**: Filters out the specified city from the cities array

## Effects
The CitiesEffects class handles side effects:
- When LoadCitiesViaEffect is dispatched, it dispatches the startLoading action
- When startLoading is dispatched, it calls the CityService to load cities and dispatches either loadCitiesSuccess or loadCitiesFail
- When either loadCitiesSuccess or loadCitiesFail is dispatched, the endLoadingAfterSuccess$ effect dispatches the endLoading action to set the loading state to false

## Pending Implementations
The reducer has a TODO comment indicating that additional reducers for updating and adding new cities should be implemented.

## Usage
The reducer is used in conjunction with NgRx Effects to load city data asynchronously and manage the state of cities in the application. Actions are dispatched to the store, and the reducer processes these actions to update the state accordingly. The loading state is used to display a loading indicator in the UI while cities are being loaded.
