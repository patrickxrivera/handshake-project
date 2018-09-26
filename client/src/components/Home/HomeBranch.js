import React from 'react';
import { isEmpty, isNil } from '../../utils/helpers';
import { HomeView, NoRestaurantsMessage } from './';

const renderRestaurants = (restaurants) =>
  isEmpty(restaurants) ? <NoRestaurantsMessage /> : <HomeView restaurants={restaurants} />;

const HomeBranch = ({ restaurants, value, handleSubmit, handleInputChange }) => {
  if (isNil(restaurants)) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {renderRestaurants(restaurants)}
      <span>Add one: </span>
      <input onChange={handleInputChange} value={value} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default HomeBranch;
