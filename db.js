const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
console.log(process.env);

const uri = process.env.DB_URL;

const dbName = 'balievecrm';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function (err) {
  console.log('MongoDB connected successfully');
});

module.exports = db;
