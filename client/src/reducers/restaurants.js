import { handleActions } from 'redux-actions';

const initialState = {
  all: null
};

export default handleActions(
  {
    FETCH_RESTAURANTS: (state, { restaurants }) => ({
      ...state,
      all: restaurants
    }),
    CREATE_RESTAURANT: (state, { restaurant }) => ({
      ...state,
      all: [...state.all, restaurant]
    })
  },
  initialState
);

export const selectRestaurants = (state) => state.restaurants.all;
