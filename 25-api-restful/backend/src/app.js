const express = require('express');
const cors = require('cors');

const db = require('./database/db');
const routes = require('./routes');

const app = express();

db.connect();

const allowedOrigins = ['http://127.0.0.1:5500'];

app.use(
  cors({
    origin: function (origin, callback) {
      let allowed = true;

      if (!origin) allowed = true;

      if (!allowedOrigins.includes(origin)) allowed = false;
      callback(null, allowedOrigins);
    },
  })
);

app.use(express.json());

app.use('/api', routes);

module.exports = app;
