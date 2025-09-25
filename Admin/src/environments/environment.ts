// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API_URL: 'https://www.api-app-distribucion.palmariusdev.com/api/',
  // API_URL: 'https://logapp-test.palmariusdev.com/api/',
  API_URL: 'http://localhost:8000/api/',
  // API_URL: 'https://api-logapp.palmariusdev.com/api/',
  firebaseConfig : {
    apiKey: 'AIzaSyDw54VQaZ91JdVUw7_p98c_lTxa8Pt5Icw',
    authDomain: 'distriapp-2021.firebaseapp.com',
    projectId: 'distriapp-2021',
    storageBucket: 'distriapp-2021.appspot.com',
    messagingSenderId: '396718208421',
    appId: '1:396718208421:web:a7a2f7c51a3cd98f5f644c',
    measurementId: 'G-1TCZ2SCEM2',
    databaseURL: 'https://distriapp-2021.firebaseio.com',
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
