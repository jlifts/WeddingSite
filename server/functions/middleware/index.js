const { admin } = require('../config/admin');

// Gets the JWT token
const getAuth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    console.error('No Token found');
    req.authToken = null;
    return res.status(403).json({ error: 'Unauthorized' });
  }
  next();
};

module.exports = {
  standard: (req, res, next) => {
    getAuth(req, res, async () => {
      try {
        const { authToken } = req;
        const decoded = await admin.auth().verifyIdToken(authToken);
        if (decoded) {
          req.authId = decoded.uid;
          return next();
        }
        return res.json({ message: 'Unathorized Token' });
      } catch (e) {
        return res.status(401).send({
          error: 'A standard account is not authorized to make this request',
        });
      }
    });
  },
  Admin: (req, res, next) => {
    getAuth(req, res, async () => {
      try {
        const { authToken } = req;
        const userInfo = await admin.auth().verifyIdToken(authToken);
        if (userInfo.admin === true) {
          req.authId = userInfo.uid;
          return next();
        }
        throw new Error('Unauthorized Token');
      } catch (e) {
        return res
          .status(401)
          .send({ error: 'You are not authorized to make this request' });
      }
    });
  },
};
