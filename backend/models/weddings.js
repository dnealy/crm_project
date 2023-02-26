const mongoose = require('mongoose');

// schema for the weddings
const weddingSchema = new mongoose.Schema(
  {
    agent: String,
    name: String,
    email: String,
    date: Date,
    venue: String,
    decoration: String,
    catering: String,
    photographer: String,
    videographer: String,
    vendorProgress: String,
    payments: [
      {
        date: Date,
        amount: Number,
      },
    ],
    todos: [
      {
        task: String,
        deadline: Date,
        done: Boolean,
        default: false,
      },
    ],
  },
  { collection: 'weddings' }
);
// create a wedding model from the wedding schema
const Wedding = mongoose.model('Wedding', weddingSchema);

module.exports = Wedding;
