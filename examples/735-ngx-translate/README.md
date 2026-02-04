# NgxTranslateDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Format

- Based on the blog post
  at https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate.
- We use `ngx-translate` module and -service to translate our strings.
- Translations are stored in `assets\i18n\*.json`
- Translations are synchronized using BabelEdit, available at https://www.codeandweb.com/babeledit/download/4.0.3/win-64
  , or for your operating system. This is a paid tool, but there is a 7-day trial available.
- See `app.component.html` on how to use the `| translate` pipe in your templates.
- Very simple app, not using translation parameters.
- This example is created with `Angular 14`, but the principles are the same for newer versions of Angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
