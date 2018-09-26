import { createAction } from 'redux-actions';

import api from '../api';
import { getAlarmsSuccess, createAlarmSuccess, addToVoteCache } from './utils/dispatch';
import { ADD_UPVOTE, ADD_DOWNVOTE } from './utils/types';

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

export const addUpvote = createAction(ADD_UPVOTE);

export const addDownvote = createAction(ADD_DOWNVOTE);
