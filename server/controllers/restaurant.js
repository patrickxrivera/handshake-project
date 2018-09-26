const errorHandler = require('../utils/errorHandler');

const create = (RestaurantModel) => async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    next('Restaurant must have a name.');
    return;
  }

  const restaurant = await RestaurantModel.create({ name });

  res.send({ success: true, restaurant: restaurant });
};

const get = (RestaurantModel) => async (req, res) => {
  const restaurants = await RestaurantModel.find({});

  res.send({ restaurants });
};

module.exports = {
  create,
  get
};
