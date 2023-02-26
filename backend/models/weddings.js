const mongoose = require('mongoose');

const weddingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    date: Date,
    venue: String,
    decoration: String,
    catering: String,
    photographer: String,
    videographer: String,
  },
  { collection: 'weddings' }
);

const Wedding = mongoose.model('Wedding', weddingSchema);

module.exports = Wedding;
