import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCks56_IpHBbo-HieF9qfOx62EazvotNWE",
  authDomain: "ensinomiblog.firebaseapp.com",
  projectId: "ensinomiblog",
  storageBucket: "ensinomiblog.appspot.com",
  messagingSenderId: "478080127085",
  appId: "1:478080127085:web:76b3394563f8b960c56f64"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };