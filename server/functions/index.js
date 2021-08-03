const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');

const guestRoute = require('./routes/guests');
const photoRoute = require('./routes/photos');
const userRoute = require('./routes/users');

app.use(cors());
app.use('/', guestRoute);
app.use('/', photoRoute);
app.use('/', userRoute);

exports.api = functions.https.onRequest(app);
