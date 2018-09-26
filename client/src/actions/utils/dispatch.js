import { GET_ALARMS, CREATE_ALARM } from './types';

export const getAlarmsSuccess = (alarms) => ({
  type: GET_ALARMS,
  alarms
});

export const createAlarmSuccess = (alarm) => ({
  type: CREATE_ALARM,
  alarm
});
