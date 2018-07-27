// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyB3-5TtPp4RqSv29Om4mycUx1ghw6PJVfc',
    authDomain: 'cities-app-firestore.firebaseapp.com',
    databaseURL: 'https://cities-app-firestore.firebaseio.com',
    projectId: 'cities-app-firestore',
    storageBucket: 'cities-app-firestore.appspot.com',
    messagingSenderId: '621166094347'
  },
  cities_endpoint: 'cities',
  image_endpoint: 'cities-upload/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
