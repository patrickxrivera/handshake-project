import { GET_ALARMS, CREATE_ALARM, ADD_TO_VOTE_CACHE } from './types';

export const getAlarmsSuccess = (alarms) => ({
  type: GET_ALARMS,
  alarms
});

export const createAlarmSuccess = (alarm) => ({
  type: CREATE_ALARM,
  alarm
});

export const addToVoteCache = (alarm) => ({
  type: ADD_TO_VOTE_CACHE,
  id: alarm._id
});
