const alarmController = require('../controllers/alarm');
const AlarmModel = require('../models/Alarm');

module.exports = (app) => {
  // Alarm
  app.post('/api/alarm', alarmController.create(AlarmModel));
  app.get('/api/alarm', alarmController.get(AlarmModel));
};
