const mongoose = require('mongoose');
require('dotenv').config(); // Import dotenv to load environment variables

// Determine the MongoDB URI based on the environment
const dbURI =
  process.env.NODE_ENV == 'production'
    ? process.env.MONGO_URI_PROD // MongoDB Atlas for production
    : process.env.MONGO_URI_DEV; // Local MongoDB for development

const connectDB = async () => {
  try {
    // Connect to MongoDB using the appropriate URI
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
