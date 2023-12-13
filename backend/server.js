require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const distanceRoutes = require('./routes/distanceRoutes');

// Initialize the express application
const app = express();

// Apply CORS middleware to allow cross-origin requests
app.use(cors());

// Apply middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB using the URI provided in the .env file
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define a route handler for the root path to check if the API is running
app.get('/', (req, res) => {
  res.send('Distance Calculator API is running.');
});

// Use the distanceRoutes for any requests that start with '/api'
app.use('/api', distanceRoutes);

// Start the server on the provided PORT or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
