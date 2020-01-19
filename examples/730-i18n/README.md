# NgInternationalization

This project has three languages: English (main), French and Dutch.

- Every element we want to translate is marked with the `i18n` directive and an (optional) description.
- There is a script in `package.json` to extract message file to `src/locale/messages.xlf`.
- Copy this file to a new file with a new (language) extension to create a new language.
- Translate the correct items in this message file.
- There are configuration options in `angular.json` to create the international versions of the project.
- There are script options in `package.json` to serve and build the international options.
- For instance, type `npm run start:fr` to serve the French version of the project.
- See the source files for comments and more information.

Credits: https://alligator.io/angular/internationalization/

## Workshops
1. Add translations to Dutch and French for the list on `app.component.html` (the second half of the page).
1. Add a complete new translation for Spanish for this project.
    - Update all the necessary files.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
