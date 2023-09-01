const express = require('express');
const {
  getAllEvents,
  getEvent,
  createEvent,
  deleteEvent,
} = require('../controllers/events');

const router = express.Router();

router.route('/').get(getAllEvents).post(createEvent);
router.route('/:id').get(getEvent).delete(deleteEvent);

module.exports = router;
