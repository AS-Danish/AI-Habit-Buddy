const User = require("../models/user");

const userId = async (req, res) => {
    const { userId } = req.body; // Correctly destructuring userId

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });  // 400 means fail
    }

    try {
        // Check if user exists in the database
        let user = await User.findOne({ userId });

        if (!user) {
            // If user does not exist, create a new user and set isFirstLogin to true
            user = new User({
                userId: userId,
                isFirstLogin: true, // mark the user as logging in for the first time
            });

            await user.save();
            return res.status(200).json({ isFirstLogin: true });  // Send response once here
        }

        // If the user exists, check if it's the first login
        if (user.isFirstLogin) {
            return res.status(200).json({ isFirstLogin: true });  // Send response once here
        }

        // If the user has already completed onboarding, just return false
        return res.status(200).json({ isFirstLogin: false });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Endpoint to mark the first login completed after onboarding
const markFirstLoginComplete = async (req, res) => {
    const { userId } = req.body;  // Correctly destructuring userId

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        // Find the user and update their isFirstLogin flag to false
        const user = await User.findOne({ userId });

        if (user) {
            user.isFirstLogin = false;
            await user.save();  // Save the updated user data
            return res.status(200).json({ message: 'First login completed' });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Error updating user data' });
    }
};

module.exports = { userId, markFirstLoginComplete };
