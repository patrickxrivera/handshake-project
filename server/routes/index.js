const restaurantController = require('../controllers/restaurant');
const RestaurantModel = require('../models/Restaurant');

module.exports = (app) => {
  app.post('/api/restaurant', restaurantController.create(RestaurantModel));
  app.get('/api/restaurant', restaurantController.get(RestaurantModel));
};
