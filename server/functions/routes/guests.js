const express = require('express');
const router = express.Router();

const controller = require('../controllers/guestController');
// const Auth = require('../middleware');

// Guests Routes
router.get('/guest', controller.getAllGuests);
router.get('/guests', controller.getGuestCount);
router.post('/guest', controller.postGuest);
router.post('/guests', controller.postNewGuest);
router.put('/guests', controller.adjust);
router.delete('/guest/', controller.deleteGuest);

module.exports = router;
