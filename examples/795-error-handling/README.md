# NgxErrorHandling

A sample project for handling Angular Errors and Exceptions in a centralized manner.

The structure of this project is as follows
- There is a `core` module that contains  the functionality that is globally available to the whole application and is also loaded immediately when the application is started — such as the error handling!
- There is a `shared` module that contains functionality that can be reused in several other modules of the application. These are mostly stateless user interface components (also called _dumb_ components), such as loading spinners or dialogs, which can be controlled by a service.
- We added Angular Material (https://material.angular.io/) for additional layout stuff

## Credits
- Based on the awesome article by Phillipp Kief: https://pkief.medium.com/global-error-handling-in-angular-ea395ce174b1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
