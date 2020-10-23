const mongoose = require('mongoose');

const GetrSchema = mongoose.Schema({
  startDate: String,
  endDate: String,
  minCount: Number,
  maxCount: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model('Getr', GetrSchema);