const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
// const Auth = require('../middleware');

// User Routes
router.get('/login', controller.loginUser);
router.get('/loging', controller.loginGoogle);

router.post('/signup', controller.NewUser);
router.post('/signupg', controller.GoogleUser);

router.put('/update', controller.DisplayName);

router.delete('/deleteuser', controller.deleteUser);

module.exports = router;
