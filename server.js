const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const db = require('./db.js');
const weddingRouter = require('./backend/routes/weddingRoutes');
const morgan = require('morgan');

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './dist')));

app.use('/api/v1/weddings', weddingRouter);

app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + './dist/index.html');
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});
