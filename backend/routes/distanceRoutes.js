const express = require('express');
const axios = require('axios');
const Query = require('../models/Query');
const router = express.Router();

// Function to fetch coordinates from OpenCage Geocoder API
async function fetchCoordinates(address) {
  const url = `https://api.opencagedata.com/geocode/v1/json`;
  try {
    const response = await axios.get(url, {
      params: {
        q: address,
        key: process.env.OPEN_CAGE_API_KEY
      }
    });
    const results = response.data.results;
    if (results.length > 0) {
      return results[0].geometry;
    } else {
      throw new Error('No results found for address');
    }
  } catch (error) {
    throw new Error('Error fetching coordinates: ' + error.message);
  }
}

// Function to calculate Haversine distance
function calculateHaversineDistance(coords1, coords2) {
  const toRadians = (degree) => degree * Math.PI / 180;
  const R = 6371; // Earth's radius in kilometers
  const deltaLat = toRadians(coords2.lat - coords1.lat);
  const deltaLng = toRadians(coords2.lng - coords1.lng);

  const a = Math.sin(deltaLat / 2) ** 2 + 
            Math.cos(toRadians(coords1.lat)) * Math.cos(toRadians(coords2.lat)) * 
            Math.sin(deltaLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
}

// Route to calculate distance between two addresses
router.post('/calculate-distance', async (req, res) => {
  const { source, destination } = req.body;
  try {
    const sourceCoords = await fetchCoordinates(source);
    const destinationCoords = await fetchCoordinates(destination);
    const distance = calculateHaversineDistance(sourceCoords, destinationCoords);

    // Create and store the query in the database
    const query = new Query({ sourceAddress: source, destinationAddress: destination, distance });
    await query.save();

    res.json({ distance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all historical queries
router.get('/historical-queries', async (req, res) => {
  try {
    const queries = await Query.find({});
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
