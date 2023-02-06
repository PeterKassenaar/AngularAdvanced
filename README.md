# Angular Advanced

Labs, exercises and example code on the training Angular Advanced by Peter Kassenaar

## Contents

- 1xx - Modules and Routing
- 2xx - @ngrx/store
- 3xx - Advanced components
- 4xx - Testing
- 5xx - Firebase
- 6xx - Angular and 3rd party integration
- 7xx - Miscellaneous concepts
- 8xx - Change Detection
- 9xx - Deprecated, old stuff is moved here for your reference

## Some links that might be useful

These were used during the training, I find them useful.

- Angular Upgrade Guide: https://update.angular.io/
- An introduction to Angular Schematics: https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2
- How to write your first Angular Schematics with
  ease: https://medium.com/@tomastrajan/%EF%B8%8F-how-to-create-your-first-custom-angular-schematics-with-ease-%EF%B8%8F-bca859f3055d
- 6 Great Uses of the Spread Operator (by David Walsh) - https://davidwalsh.name/spread-operator
- On Stateful en Stateless components (by Todd Motto) - https://toddmotto.com/stateful-stateless-components
- When to use the .forRoot() method - https://medium.com/@chrishouse/when-to-use-angulars-forroot-method-400094a0ebb7

## Change Detection

- Angular Change Detection Explained (Thoughtram)
  - https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
- Understanding Change Detection in Angular (Alligator.io) - https://alligator.io/angular/change-detection-strategy/
- Pitfalls in Change Detection: https://blog.angular-university.io/onpush-change-detection-how-it-works/

## On testing

- Official documentation: https://angular.io/guide/testing
- Testing basics - introduction
  blog: https://medium.com/javascript-in-plain-english/unit-testing-in-angular-basics-part-1-329304813dc3
- More extensive blog: https://www.digitalocean.com/community/tutorials/testing-angular-with-jasmine-and-karma-part-1

## Design Patterns
- Generic JavaScript Design Patterns, by Addy Osmani: https://addyosmani.com/resources/essentialjsdesignpatterns/book/ 
- AND/OR (a little bit more modern): https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm
- Specific Angular Design Patterns book: https://www.amazon.co.uk/Angular-Design-Patterns-Implement-patterns/dp/1786461722/
- Java Design Patterns: https://refactoring.guru/design-patterns/java

## Angular vs. Vue vs. React

- https://www.codeinwp.com/blog/angular-vs-vue-vs-react/

## Publishing your Angular application

- Develop and test locally with `ng serve`
- Create a production build with `ng build --prod`
- Upload the contents of the `\dist\` folder to - for instance - Netlify: https://www.netlify.com/ (but there are a *
  ton* of other free hosting options available, such as Azure, AWS, Github Pages, Heroku, Firebase, and more).

### PWA's

- Official documentation on
    - Service Workers: https://angular.io/guide/service-worker-getting-started
    - Manifest.json and Google Guide for PWAs: https://developers.google.com/web/updates/2015/12/getting-started-pwa
- Slides/presentations on
  PWA: https://speakerdeck.com/steffenjahr/progressive-web-apps-pwa-with-angular-rocking-the-web-the-native-way
- Repo bij bovenstaande slides. Met client/server demo code. Je kunt een `npm install` uitvoeren op de codes - zie
  beschrijving in README.md.
- PDF JS - generate pdf's with JavaScript - https://mozilla.github.io/pdf.js/ en https://github.com/mozilla/pdf.js
- Dexie JS - wrapper around IndexedDB - https://dexie.org/

### Observables

- Pipes and Observables, the `async` pipe: https://toddmotto.com/angular-ngif-async-pipe
- How to avoid memory leaks from
  subscriptions: https://medium.com/@sub.metu/angular-how-to-avoid-memory-leaks-from-subscriptions-8fa925003aa9
- Observables in Angular: https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

### Standalone components
- Read the excellent series of articles by Manfred Steyer GDE, on this topic: https://www.angulararchitects.io/aktuelles/angulars-future-without-ngmodules-lightweight-solutions-on-top-of-standalone-components/


## Various
- Is NPM safe? : https://medium.com/hackernoon/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5
- Jurgen van de Moere: Why you should never use function calls in Angular template expressions. https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496
- Martin Splitt on how google handles JavaScript sites: https://www.youtube.com/watch?v=LXF8bM4g-J4 (check the complete series!)
- Andre Staltz on creating observables from scratch: https://www.youtube.com/watch?v=uQ1zhJHclvs
- On using `module.forRoot(...)` function. https://medium.com/slackernoon/when-to-use-angulars-forroot-method-400094a0ebb7

-- Questions, updates? Mail me at info@kassenaar.com
