import { fetchRestaurantsSuccess, createRestaurantSuccess } from './utils/dispatch';
import api from '../api';

export const fetchRestaurants = () => async (dispatch) => {
  const response = await api.fetchRestaurantsSent();
  const { restaurants } = response.data;

  return dispatch(fetchRestaurantsSuccess(restaurants));
};

export const createRestaurant = (name) => async (dispatch) => {
  const response = await api.createRestaurantsSent(name);
  const { success, restaurant } = response.data;

  if (success) {
    return dispatch(createRestaurantSuccess(restaurant));
  }
};
