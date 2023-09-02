const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, 'Name can not exceed 50 characters'],
    },
    type: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, 'Type can not exceed 50 characters'],
    },
    address: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, 'Address can not exceed 50 characters'],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, 'Description can not exceed 100 characters'],
    },
    poster: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User',
    //   required: [true, 'Please provide a user.'],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', EventSchema);
