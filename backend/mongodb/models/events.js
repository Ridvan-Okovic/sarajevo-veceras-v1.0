import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  place: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  address: { type: String, required: true },
  type: { type: String, required: true },
  photo: { type: String, required: true },
});
