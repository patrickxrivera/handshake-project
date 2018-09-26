const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlarmSchema = new Schema({
  text: String,
  upvotes: Number,
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('AlarmModel', AlarmSchema);
