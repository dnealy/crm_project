const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const db = require('./db.js');
const weddingRouter = require('./backend/routes/weddingRoutes');
const morgan = require('morgan');
const dotenv = require('dotenv');

app.use(morgan('combined'));

// sets cors open for requests from the front-end
app.use((req, res, next) => {
  // green lists the ip
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.18.41:5500');
  // allows all methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // sets content type
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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
