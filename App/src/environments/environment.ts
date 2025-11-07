// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://127.0.0.1:8000/api/',
  PERSONAL_API_URL: 'http://127.0.0.1:8001/api/', // backend de personal
  firebaseConfig : {
    apiKey: 'AIzaSyDw54VQaZ91JdVUw7_p98c_lTxa8Pt5Icw',
    authDomain: 'distriapp-2021.firebaseapp.com',
    projectId: 'distriapp-2021',
    storageBucket: 'distriapp-2021.appspot.com',
    messagingSenderId: '396718208421',
    appId: '1:396718208421:web:a7a2f7c51a3cd98f5f644c',
    measurementId: 'G-1TCZ2SCEM2'
  },
  mapquest: {
    key: 'L81mEjtgKZDwKMwAsl6YInvGu3IvXXtS'
  },
  pusher: {
    key: '70177c7279134eac5800',
    cluster: 'us2',
    authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth'

  },
  // storageKeys: {
  //   requests: 'distriappreqs',
  //   orders: 'distriapporders'
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
