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
    CREATE_RESTAURANT: (state, { alarm }) => ({
      ...state,
      all: [...state.all, alarm]
    })
  },
  initialState
);

export const selectAlarms = (state) => state.alarms.all;
