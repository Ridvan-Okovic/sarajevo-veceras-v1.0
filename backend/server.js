const express = require('express');
const cors = require('cors');
const connect = require('./database/connect');
require('dotenv').config();
const events = require('./routes/events.routes');

const server = express();

server.use(cors());

server.use('/api/v1/events', events);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    server.listen(PORT, () => {
      console.log('Server started at http://localhost:3000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
