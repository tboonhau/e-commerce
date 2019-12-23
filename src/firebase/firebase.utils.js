import firebase from 'firebase/app'; //pull in firebase util library
//always need this base import, give access to firestore and auth
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCEnme_yL-KvW1JL52zhcXc4xxJIeDBUgk',
  authDomain: 'e-commerce-17ceb.firebaseapp.com',
  databaseURL: 'https://e-commerce-17ceb.firebaseio.com',
  projectId: 'e-commerce-17ceb',
  storageBucket: 'e-commerce-17ceb.appspot.com',
  messagingSenderId: '609928618360',
  appId: '1:609928618360:web:557638e3eb36c9d9b8288d',
  measurementId: 'G-W3FQDWPMWH'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //give access to auth provider class
provider.setCustomParameters({ prompt: 'select_account' }); //trigger pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
