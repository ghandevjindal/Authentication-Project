const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const userController = require('./src/auth/controllers/userController');

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use(bodyParser.json());

app.use('/api/auth', userController);

// Define routes here
app.get('/', (req, res) => {
  res.send('Welcome to the Express app with MongoDB!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
