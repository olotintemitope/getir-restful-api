const mongoose = require('mongoose');

const getirSchema = mongoose.Schema({
  value: String,
  key: String,
  createdAt: Date,
  counts: Array,
}, {
  timestamps: true
});

module.exports = mongoose.model('records', getirSchema);