const express = require('express');
const connectDB = require('./db'); // Import the MongoDB connection
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes here
app.get('/', (req, res) => {
  res.send('Welcome to the Express app with MongoDB!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
