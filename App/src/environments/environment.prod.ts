export const environment = {
  production: true,
  // API_URL: 'https://www.api-app-distribucion.palmariusdev.com/api/app/',
  API_URL: 'http://127.0.0.1:8000/api/',
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
    authEndpoint: 'https://api-logapp.palmariusdev.com/broadcasting/auth'
  },
  // storageKeys: {
  //   requests: 'distriappreqs',
  //   orders: 'distriapporders'
  // }
};
