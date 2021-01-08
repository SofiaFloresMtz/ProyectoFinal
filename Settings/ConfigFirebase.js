import firebase from 'firebase/app';
import 'firebase/database';

const config={
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyChoD-_H3vgFfl4YJZan_qFykhQA7PkaoA",
  authDomain: "menureactnative-411b3.firebaseapp.com",
  projectId: "menureactnative-411b3",
  storageBucket: "menureactnative-411b3.appspot.com",
  messagingSenderId: "232557311689",
  appId: "1:232557311689:web:c5597c25ea720f73407f18",
  measurementId: "G-H7NFCJFC21"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;