const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    isFirstLogin: {type: Boolean, default: true},
    onboardingAnswers: [{
        question: String,
        answer: String
      }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;