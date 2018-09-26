const axios = require('axios');

const errorHandler = require('../utils/errorHandler');
const { NOTIFICATION_API } = require('../utils/constants');
const { isError } = require('../utils/helpers');

const create = (AlarmModel) => async (req, res, next) => {
  const { text } = req.body;

  if (!text) {
    next(`Text can't be empty.`);
    return;
  }

  const newAlarm = await AlarmModel.create({ text });

  res.send({ success: true, alarm: newAlarm });

  const pushNotificationStatus = await axios.post(NOTIFICATION_API, { alarm_id: newAlarm._id });

  if (isError(pushNotificationStatus)) {
    console.log(pushNotificationStatus);
    // TODO:
    // send error to logging service
  }
};

const get = (AlarmModel) => async (_, res, next) => {
  const alarms = await AlarmModel.find({});

  res.send({ alarms: alarms.reverse() });
};

module.exports = {
  create,
  get
};
