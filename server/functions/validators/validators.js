const { admin, db } = require('./admin');
const firebase = require('firebase/auth');

const auth = admin.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

//Sign Ups
