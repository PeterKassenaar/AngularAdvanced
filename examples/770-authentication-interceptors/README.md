# Authentication and Interceptors

This project consists of two sub-projects. They _both_ have a `package.json` and you need to perform `npm install` for both of them!

- `/client` - the Angular-application using authentication and interceptors
- `/server` - a simple NodeJS server using JWT-authentication

## Server

1. Go to the `/server` folder and perform `npm install`.
1. Open a command prompt in the folder and type `npm start`.
1. This will start a simple NodeJS server, listening for incoming requests at http://localhost:4000

## Client

1. Go to the `/client` folder and perform `npm install`
1. Open a command prompt in the folder and type `npm start`.
1. This will start the Angular Application and load the login page.
1. Log in using `test/test` as the username/password combination.
1. The server you just started will return a JWT-token and Angular stores it localStorage. You will then be redirected to the home page.

## Editing the application

- The address of the baseUrl (or API url) is stored in `environment/environment.ts`. You can update the address there to talk to a "real" backend.

## Credits

This app builts upon work by James Watson, https://github.com/cornflourblue/node-jwt-authentication-api.

Key differences:

- this app is made with Angular CLI (instead of plain WebPack-config)
- it has a lazy loading and modules-example section
- it shows the status of the current user (logged in/logged out) via an Observable.
