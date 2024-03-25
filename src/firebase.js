import { getDatabase} from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBcEyp5lv-oHqAi3f6FtK3k7SZEx_sJzJU",
    authDomain: "the-stellar-cult-website.firebaseapp.com",
    databaseURL: "https://the-stellar-cult-website-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "the-stellar-cult-website",
    storageBucket: "the-stellar-cult-website.appspot.com",
    messagingSenderId: "21208385410",
    appId: "1:21208385410:web:d5baefb2017dcd7632b19b",
    measurementId: "G-7GG91YYMVX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
