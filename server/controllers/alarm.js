const errorHandler = require('../utils/errorHandler');

const create = (AlarmModel) => async (req, res, next) => {
  const { text } = req.body;

  if (!text) {
    next(`Text can't be empty.`);
    return;
  }

  const newAlarm = await AlarmModel.create({ text });

  res.send({ success: true, alarm: newAlarm });

  // TODO:
  // send post request to push notification API
};

const get = (AlarmModel) => async (_, res, next) => {
  const alarms = AlarmModel.find({});

  res.send(alarms);
};

module.exports = {
  create,
  get
};
