import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyAAaV2qa9o0_KdAwuDdDmXxFRb4GxYKG2Y",
    authDomain: "ecomm-db-dd237.firebaseapp.com",
    databaseURL: "https://ecomm-db-dd237.firebaseio.com",
    projectId: "ecomm-db-dd237",
    storageBucket: "ecomm-db-dd237.appspot.com",
    messagingSenderId: "878323889164",
    appId: "1:878323889164:web:5a31577c2114df2a1aea29"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;