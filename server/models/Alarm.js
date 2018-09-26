const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlarmSchema = new Schema({
  text: String,
  created_at: { type: Date, default: Date.now() },
  upvotes: Number
});

module.exports = mongoose.model('AlarmModel', AlarmSchema);
