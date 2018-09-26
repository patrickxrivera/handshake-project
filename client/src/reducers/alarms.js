import { handleActions } from 'redux-actions';

const initialState = {
  all: null
};

export default handleActions(
  {
    GET_ALARMS: (state, { alarms }) => ({
      ...state,
      all: alarms
    }),
    CREATE_ALARM: (state, { alarm }) => ({
      ...state,
      all: [alarm, ...state.all]
    })
  },
  initialState
);

export const selectAlarms = (state) => state.alarms.all;
