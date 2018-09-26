import React from 'react';
import { isEmpty, isNil } from '../../utils/helpers';
import { HomeView, NoRestaurantsMessage } from './';

const renderAlarms = (alarms) =>
  isEmpty(alarms) ? <NoRestaurantsMessage /> : <HomeView alarms={alarms} />;

const HomeBranch = ({ alarms, value, handleSubmit, handleInputChange }) => {
  if (isNil(alarms)) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {renderAlarms(alarms)}
      <span>Add one: </span>
      <input onChange={handleInputChange} value={value} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default HomeBranch;
