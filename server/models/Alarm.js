const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlarmSchema = new Schema({
  text: String,
  upvotes: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('AlarmModel', AlarmSchema);
