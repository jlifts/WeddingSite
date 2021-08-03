const express = require('express');
const router = express.Router();

const controller = require('../controllers/photoController');
// const Auth = require('../middleware');

// Photos Routes
router.get('/photo', controller.getAllPhotos);
router.post('/photo', controller.postPhoto);
router.delete('/photo/', controller.deletePhoto);

module.exports = router;
