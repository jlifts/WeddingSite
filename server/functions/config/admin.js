const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://wedding-site-4bce1-default-rtdb.firebaseio.com',
  storageBucket: 'wedding-site-4bce1.appspot.com',
});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { admin, db, storage };
