const express = require('express');
const router = express.Router();

const controller = require('../controllers/faqController');
// const Auth = require('../middleware');

// FAQs Routes
router.get('/faqs', controller.getAllFaqs);
router.post('/faq', controller.postFaq);
router.patch('/faq', controller.editFaq);
router.delete('/faq', controller.deleteFaq);

module.exports = router;