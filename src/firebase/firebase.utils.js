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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //give access to auth provider class
provider.setCustomParameters({ prompt: 'select_account' }); //trigger pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
