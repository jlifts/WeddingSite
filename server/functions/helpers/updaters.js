const { admin, db } = require('../config/admin');

exports.increment = (number) => {
  const count = {
    count: admin.firestore.FieldValue.increment(number),
  };
  db.collection('guestCount')
    .doc('guestCount')
    .update(count)
    .then((doc) => {
      res.json({ message: `Document ${doc.id} increased by ${number}` });
    })
    .catch((err) => {
      res.status(500).json({ error: `Server Error` });
      console.error(err);
    });
};
