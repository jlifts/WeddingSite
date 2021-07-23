import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import {
  FIREBASE_API_KEY,
  FIREBASE_APPID,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_DATABASEURL,
  FIREBASE_MEASUREMENTID,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
} from '../key';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASUREMENTID,
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export const db = app.firestore();
export const storage = app.storage();

const getCurrentTimestamp = firebase.firestore.Timestamp.now();
export const timeStamp = getCurrentTimestamp.toDate().toDateString();
export const Field = firebase.firestore.FieldValue;

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;
