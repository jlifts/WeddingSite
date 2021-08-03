const { db, storage, admin } = require('../config/admin');

module.exports = {
  //GET
  getAllPhotos: (req, res) => {
    db.collection('images')
      .orderBy('createdAt', 'desc')
      .get()
      .then((data) => {
        let photos = [];
        data.forEach((photo) => {
          photos.push({ ...photo.data(), id: photo.id });
        });
        return res.json(photos);
      })
      .catch((err) => console.error(err));
  },
  //POST
  postPhoto: (req, res) => {
    //Needs fixed Front and Back
    const fileName = req.body.name;
    // storage
    //   .bucket('wedding-site-4bce1.appspot.com')
    //   .file(fileName)
    //   .createWriteStream()
    //   .end(req.file.buffer);

    const newPhoto = {
      createdAt: admin.firestore.Timestamp.now().toDate().toDateString(),
      url: req.body.url,
      name: fileName,
    };

    db.collection('images')
      .doc()
      .set(newPhoto)
      .then((doc) => {
        res.json({ message: `Document ${doc.id} created` });
      })
      .catch((err) => {
        res.status(500).json({ error: `Server Error` });
        console.error(err);
      });
  },
  //PUT
  //DELETE
  deletePhoto: (req, res) => {
    const fileName = req.body.name;
    const document = db.collection('images').doc(`${req.body.docId}`);
    document.get().then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Photo not found' });
      } else {
        storage
          .bucket('wedding-site-4bce1.appspot.com')
          .file(fileName)
          .delete();
        return document.delete();
      }
    });
  },
  //Timing Out?
};
