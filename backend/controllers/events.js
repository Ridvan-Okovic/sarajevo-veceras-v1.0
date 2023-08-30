const Event = require('../models/Event');
const { StatusCodes } = require('http-status-codes');

const getAllEvents = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get all events page.' });
};

module.exports = getAllEvents;
