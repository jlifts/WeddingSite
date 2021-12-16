const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');

app.use(cors({ origin: true }));
const guestRoute = require('./routes/guests');
const photoRoute = require('./routes/photos');
const userRoute = require('./routes/users');
const faqRoute = require('./routes/faqs');

app.use('/', guestRoute);
app.use('/', photoRoute);
app.use('/', userRoute);
app.use('/', faqRoute)

exports.api = functions.https.onRequest(app);
