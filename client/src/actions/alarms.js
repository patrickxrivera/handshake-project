import { getAlarmsSuccess, createAlarmSuccess } from './utils/dispatch';
import api from '../api';

export const getAlarms = () => async (dispatch) => {
  const response = await api.getAlarmsSent();
  const { alarms } = response.data;

  return dispatch(getAlarmsSuccess(alarms));
};

export const createAlarm = (name) => async (dispatch) => {
  const response = await api.createAlarmSent(name);
  const { success, alarm } = response.data;

  if (success) {
    return dispatch(createAlarmSuccess(alarm));
  }

  // TODO:
  // handle error
};
