const { admin, db } = require('../config/admin');
const { increment } = require('../helpers/updaters');

module.exports = {
  //GET
  getAllGuests: (req, res) => {
    db.collection('guests')
      .orderBy('stamp', 'desc')
      .get()
      .then((data) => {
        let guests = [];
        data.forEach((guest) => {
          guests.push({ guestId: guest.id, ...guest.data() });
        });
        return res.json(guests);
      })
      .catch((err) => console.error(err));
  },
  getGuestCount: (req, res) => {
    db.collection('guestCount')
      .get()
      .then((data) => {
        let guestsCount = [];
        data.forEach((guestCount) => {
          guestsCount.push(guestCount.data());
        });
        return res.json(guestsCount);
      })
      .catch((err) => console.error(err));
  },
  //POST
  postGuest: (req, res) => {
    const newGuest = {
      name: req.body.name,
      attendees: req.body.number,
      createdAt: admin.firestore.Timestamp.now().toDate().toDateString(),
      stamp: admin.firestore.Timestamp.now(),
    };
    increment(parseInt(req.body.number));
    db.collection('guests')
      .doc(req.body.name)
      .set(newGuest)
      .then((doc) => {
        res.json({ message: `Document ${doc.id} created` });
      })
      .catch((err) => {
        res.status(500).json({ error: `Server Error` });
        console.error(err);
      });
  },
  postNewGuest: (req, res) => {
    const newGuest = {
      name: req.body.name,
      attendees: req.body.number,
      createdAt: admin.firestore.Timestamp.now().toDate().toDateString(),
      stamp: admin.firestore.Timestamp.now(),
      AddedBy: 'Josh and Olivia',
    };
    increment(parseInt(req.body.number));
    db.collection('guests')
      .doc(req.body.name)
      .set(newGuest)
      .then((doc) => {
        res.json({ message: `Document ${doc.id} created` });
      })
      .catch((err) => {
        res.status(500).json({ error: `Server Error` });
        console.error(err);
      });
  },
  //PUT
  adjust: (req, res) => {
    const update = {
      count: req.body.number,
    };
    db.collection('guestCount')
      .doc('guestCount')
      .set(update)
      .then((doc) => {
        res.json({ message: `Document ${doc.id} increased by ${number}` });
      })
      .catch((err) => {
        res.status(500).json({ error: `Server Error` });
        console.error(err);
      });
  },
  //DELETE
  deleteGuest: (req, res) => {
    let n = req.body.number;
    console.log(n);
    n = -n;
    console.log(n);
    increment(parseInt(n));
    db.collection('guests')
      .doc(req.body.name)
      .delete()
      .then((doc) => {
        res
          .json({ message: `Document ${doc.id} deleted successfully` })
          .catch((err) => {
            res.status(500).json({ error: 'Server Error' });
            console.error(err);
          });
      });
  },
};
