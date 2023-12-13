const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  sourceAddress: String,
  destinationAddress: String,
  distance: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Query', querySchema);
