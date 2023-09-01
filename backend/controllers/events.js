const Event = require('../models/Event');
const { StatusCodes } = require('http-status-codes');

const getAllEvents = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get all events page.' });
};

const getEvent = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get event details.' });
};

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({ event });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'An error occured.' });
  }
};

const deleteEvent = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Delete event.' });
};

module.exports = { getAllEvents, getEvent, createEvent, deleteEvent };
