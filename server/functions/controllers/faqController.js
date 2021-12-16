const { admin, db } = require('../config/admin');

module.exports = {
  //GET
    getAllFaqs: (req, res) => {
    db.collection('faqs')
    //   .orderBy('stamp', 'desc')
        .get()
        .then((data) => {
        let faqs = [];
        data.forEach((faq) => {
            faqs.push({ id: faq.id, ...faq.data() });
        });
        return res.json(faqs);
        })
        .catch((err) => console.error(err));
    },
  //POST
    postFaq: (req, res) => {
    const faq = {
        answer: req.body.answer,
        question: req.body.question,
        publisher: req.body.publisher,
        createdAt: admin.firestore.Timestamp.now().toDate().toDateString(),
        stamp: admin.firestore.Timestamp.now(),
    };

    db.collection('faqs')
        .doc()
        .set(faq)
        .then((doc) => {
        res.json({ message: `Document ${doc.id} created` });
        })
        .catch((err) => {
        res.status(500).json({ error: `Server Error` });
        console.error(err);
        });
    },
    //PATCH
    editFaq: (req, res) => {
    const update = {
        question: req.body.question,
        answer: req.body.answer,
    };

    console.log(req.body)
    db.collection('faqs')
        .doc(req.body.id)
        .set(update)
        .then((doc) => {
        res.json({ message: `Document ${doc.id} edited` });
        })
        .catch((err) => {
        res.status(500).json({ error: `Server Error` });
        console.error(err);
        });
    },
    //DELETE
    deleteFaq: (req, res) => {
    db.collection('faqs')
        .doc(req.body.id)
        .delete()
        .then((doc) => {
        res.json({ message: `Document deleted successfully` });
        })
        .catch((err) => {
        res.status(500).json({ error: 'Server Error' });
        console.error(err);
        });
    },
};
