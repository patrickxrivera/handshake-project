import React from 'react';
import { isEmpty, isNil } from '../../utils/helpers';
import { HomeView, NoAlarmsMessage } from './';

const renderAlarms = (alarms, rest) =>
  isEmpty(alarms) ? <NoAlarmsMessage /> : <HomeView alarms={alarms} {...rest} />;

const HomeBranch = ({ alarms, value, handleSubmit, handleInputChange, ...rest }) => {
  if (isNil(alarms)) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {renderAlarms(alarms, rest)}
      <span>Add one: </span>
      <input onChange={handleInputChange} value={value} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default HomeBranch;
