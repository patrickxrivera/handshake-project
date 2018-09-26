import { FETCH_RESTAURANTS, CREATE_RESTAURANT } from './types';

export const fetchRestaurantsSuccess = (restaurants) => ({
  type: FETCH_RESTAURANTS,
  restaurants
});

export const createRestaurantSuccess = (restaurant) => ({
  type: CREATE_RESTAURANT,
  restaurant
});
