import { getAlarmsSuccess, createAlarmSuccess } from './utils/dispatch';
import api from '../api';

export const getAlarms = () => async (dispatch) => {
  const response = await api.getAlarmsSent();
  // const { restaurants } = response.data;

  // return dispatch(getAlarmsSuccess(restaurants));
};

export const createAlarm = (name) => async (dispatch) => {
  const response = await api.createAlarmSent(name);
  // const { success, restaurant } = response.data;

  // if (success) {
  //   return dispatch(createAlarmSuccess(restaurant));
  // }
};
