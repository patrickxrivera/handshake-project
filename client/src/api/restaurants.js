import axios from 'axios';

const ENDPOINT = '/api/restaurant';

export default {
  fetchRestaurantsSent: () => axios.get(ENDPOINT),
  createRestaurantsSent: (name) => axios.post(ENDPOINT, { name })
};
