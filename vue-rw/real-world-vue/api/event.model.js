const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
  location: {
    type: String
  },
  description: {
    type: String
  },
  organizer: {
    type: String
  },
  catetory: {
    type: String
  }
});

const Event = mongoose.model('Event', eventSchema);
exports.Event = Event;
