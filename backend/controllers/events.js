const Event = require('../models/Event');
const { StatusCodes } = require('http-status-codes');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(StatusCodes.OK).json({ success: true, events });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'An error occured.' });
  }
};

const getEvent = async (req, res) => {
  const { id: eventId } = req.params;
  try {
    const event = await Event.findById({ _id: eventId });
    if (!event) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `There is no event with id: ${eventId}.` });
    }
    res.status(StatusCodes.OK).json({ success: true, event });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'An error occured.' });
  }
};

const createEvent = async (req, res) => {
  console.log(req.body);
  try {
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({ event });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'An error occured.' });
  }
};

const deleteEvent = async (req, res) => {
  const { id: eventId } = req.params;
  try {
    const deletedEvent = await Event.deleteOne({ _id: eventId });
    if (!deletedEvent) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `There is no event with id: ${eventId}.` });
    }
    res.status(StatusCodes.OK).json({ success: true, deletedEvent });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'An error occured.' });
  }
};

module.exports = { getAllEvents, getEvent, createEvent, deleteEvent };
