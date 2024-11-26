require('dotenv').config(); // Load .env file
const mongoose = require('mongoose');

uri = process.env.MONGO_URI;

const connectDB = () => {
    return mongoose.connect(uri);
}

module.exports = connectDB;