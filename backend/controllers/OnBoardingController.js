const User = require('../models/user'); // Make sure the path is correct


const storeOnboardingData = async (req, res) => {
  const { userId, answers } = req.body;

  try {
    let user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Format the answers with questions before saving
    const formattedAnswers = answers.map((answer, index) => ({
      question: answer.question,
      answer: answer.answer
    }));

    user.onboardingAnswers = formattedAnswers;
    user.isFirstLogin = false; // Set firstLogin to false after onboarding

    await user.save();

    res.status(200).json({ message: 'Onboarding data saved successfully' });
  } catch (error) {
    console.error('Error storing onboarding data:', error);
    res.status(500).json({ error: 'Failed to store onboarding data' });
  }
};

  
  module.exports = { storeOnboardingData };
  