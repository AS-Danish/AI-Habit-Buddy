const express = require('express');
const router = express.Router();
const {userId, markFirstLoginComplete} = require('../controllers/UserId')

//this is the route
//router.route("/").get(userId);
// Route to check if it's the user's first login
router.route("/").post(userId);

// Route to mark the first login as completed after onboarding
router.route("/markFirstLoginComplete").post(markFirstLoginComplete);

//another sample router
//router.route("/testing").get(userId);

module.exports = router;