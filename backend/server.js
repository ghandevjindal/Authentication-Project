const express = require('express');
const dotnv = require('dotenv');

dotnv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(PORT, () => {
    //serever start
  console.log(`Server running on http://localhost:${PORT}`);
});
