import { handleActions } from 'redux-actions';
import { addUpvote, addDownvote } from './utils/helpers';

const initialState = {
  all: null,
  votes: {}
};

export default handleActions(
  {
    GET_ALARMS: (state, { alarms }) => ({
      ...state,
      all: alarms
    }),
    CREATE_ALARM: (state, { alarm }) => ({
      ...state,
      all: [alarm, ...state.all],
      votes: {
        ...state.votes,
        [alarm._id]: 0
      }
    }),
    ADD_UPVOTE: (state, { payload }) => ({
      ...state,
      votes: {
        ...state.votes,
        [payload]: addUpvote(state, payload)
      }
    }),
    ADD_DOWNVOTE: (state, { payload }) => ({
      ...state,
      votes: {
        ...state.votes,
        [payload]: addDownvote(state, payload)
      }
    })
  },
  initialState
);

export const selectAlarms = (state) => state.alarms.all;

export const selectVotes = (state) => state.alarms.votes;
