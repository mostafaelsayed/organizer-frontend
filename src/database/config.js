import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKPgLHw2gaQLZ4VsmuxvU81NZauo_xvzo",
    authDomain: "my-organizer-frontend.firebaseapp.com",
    databaseURL: "https://my-organizer-frontend.firebaseio.com",
    projectId: "my-organizer-frontend",
    storageBucket: "my-organizer-frontend.appspot.com",
    messagingSenderId: "586466255607",
    appId: "1:586466255607:web:a84753ac25e385658269f2",
    measurementId: "G-79NQPF9Z5W"
};

// const config = {
//     dev: {
//         url: 'http://localhost:4000',
//     },
//     prod: {
//         url: 'https://the-organizer-backend'
//     }
// };

const apiUrl = window.location.href.startsWith('https') === true ? 'https://the-organizer-backend' : 'http://localhost:4000';

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database, apiUrl};