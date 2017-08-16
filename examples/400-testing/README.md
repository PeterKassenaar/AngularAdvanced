# Angular Unit Testing Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.
It's purpose is to demonstrate different ways of testing classes, services and components in Angular.
The project itself is just a plain CLI-project. It doesn't do anything.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Open the various `*.spec.ts`-files and (un)comment the specific, provided tests to see them in action.


## Suggested order
1. See `src/app/shared/model/00-person.model.ts|spec.ts` for testing of a simple class.
1. See `src/app/shared/services/*.service.ts|spec.ts` for testing of a services, async behavior and mocking async services.
1. See `src/app/city/city.component.ts|*.spec.ts` for testing of a simple component using fixtures and debugElement.
1. See `src/app/input/input.component.ts|*.spec.ts` for testing of a component using @Input().
1. See `src/app/output/output.component.ts|*.spec.ts` for testing of a component using @Output().
1. See `src/app/card/card.component.ts|*.spec` for testing strategies with mocking of nested components

## Workshops
- Study `10-car.model.ts` and create a test suite for it.
- Study `10-car.service.ts` and create a test suite for it, using `TestBed.configureTestingModule()`
- Study `11-car.remote.service.ts` and create a test suite for it, using `MockBackend` and `MockResponse`.
- The *.spec.ts-files are already available, but write the tests yourself.

You can run the project with `ng serve` or `npm start` to see its simple output
- Study `car.component.ts` and create a test suite for it.
- Test wether the component is correctly created.
- Test if `this.cars[]` is constructed after initialisation. Expect the length of the array to be `2`.
- Test wether the `@Output()` event is called when clicking on a car.
- Create an `@Input` property for the component yourself and test it.

 




