const express = require('express');
const registrationController = require('../controllers/registrationController');
const router = express.Router();

router.route('/').post(registrationController.newsLetterSignup);

module.exports = router;