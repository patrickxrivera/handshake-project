const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlarmSchema = new Schema({
  text: { type: String },
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('AlarmModel', AlarmSchema);
