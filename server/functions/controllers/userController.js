const { admin, db } = require('../config/admin');

module.exports = {
  //GET
  loginUser: (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        return data.user.getIdToken();
      })
      .then((token) => {
        return res
          .json({
            token,
          })
          .catch((err) => {
            return res.status(403).json(err.message);
          });
      });
  },
  loginGoogle: (req, res) => {},
  //POST
  NewUser: (req, res) => {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      // confirmPassword: req.body.confirmPassword,
      handle: req.body.handle,
    };

    //TODO: validate
    admin
      .auth()
      .createUser({
        email: newUser.email,
        password: newUser.password,
        displayName: newUser.handle,
      })
      .then((data) => {
        res.status(201).json({
          message: `User with ${data.uid} signed up successfully`,
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  },

  GoogleUser: (req, res) => {},
  //PUT
  DisplayName: (req, res) => {},
  //DELETE
  deleteUser: (req, res) => {},
};
