# Angular i18n example

# Source code
Source code: https://github.com/localizely/angular-i18n-example


![demo](./images/angular-i18n-example.gif)
<br>

This project is a tutorial on how to do internationalization (i18n) in Angular projects with the `@angular/localize`.

It contains examples for:

- Marking content for extraction using the `i18n` attribute
- Different kinds of messages (plain text, ICU Plural, ICU Select, etc.)
- Extraction of the marked content
- Translation of the XLIFF files
- Language switcher
- RTL handling

For more details, check out the full article: [Angular i18n tutorial](https://localizely.com/blog/angular-i18n-tutorial/)

## Requirements

- Node
- npm
- git

## Steps to get the app running

- `git clone`
- `cd angular-i18n-example`
- `npm install`
- `ng serve --configuration=<LOCALE> --open` (pass one of supported locales `ar`, `en-US`, or `fr`)
