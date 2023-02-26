const mongoose = require('mongoose');

const uri =
  'mongodb+srv://demureaxs:Thomas1987@cluster0.betekzw.mongodb.net/balievecrm?retryWrites=true&w=majority';

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
