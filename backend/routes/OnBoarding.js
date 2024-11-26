// routes/onboarding.js
const express = require('express');
const { storeOnboardingData } = require('../controllers/OnBoardingController');

const router = express.Router();

router.post('/', storeOnboardingData);

module.exports = router;
