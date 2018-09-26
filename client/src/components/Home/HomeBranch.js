import React from 'react';
import { isEmpty, isNil } from '../../utils/helpers';
import { HomeView, NoAlarmsMessage } from './';

import { Button } from '../Button';
import { HomeHeading, Wrapper, InputWrapper, Input, InnerInputWrapper } from './styles';

const renderAlarms = (alarms, rest) =>
  isEmpty(alarms) ? <NoAlarmsMessage /> : <HomeView alarms={alarms} {...rest} />;

const HomeBranch = ({ alarms, value, handleSubmit, handleInputChange, ...rest }) => {
  if (isNil(alarms)) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <HomeHeading>Bellbird</HomeHeading>
      <InputWrapper>
        <div>
          <span>Add an alarm!</span>
        </div>
        <InnerInputWrapper>
          <Input onChange={handleInputChange} value={value} />

          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </InnerInputWrapper>
      </InputWrapper>

      {renderAlarms(alarms, rest)}
    </Wrapper>
  );
};

export default HomeBranch;
