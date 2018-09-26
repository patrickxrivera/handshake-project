import React from 'react';

import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 10px;
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UpvoteWrapper = styled.div`
  > * {
    margin: 0 1rem;
  }
`;

const renderAlarm = ({ addUpvote, addDownvote, votes }) => ({ _id, text }) => (
  <ListWrapper key={_id}>
    <List>
      <div>
        <span>{text.toUpperCase()}</span>
      </div>
      <UpvoteWrapper>
        <span>{votes[_id]}</span>
        <button onClick={() => addUpvote(_id)}>Upvote</button>
        <button onClick={() => addDownvote(_id)}>Downvote</button>
      </UpvoteWrapper>
    </List>
  </ListWrapper>
);

const Home = ({ alarms, ...rest }) => (
  <div>
    <h3>All Alarms</h3>
    <ul>{alarms.map(renderAlarm(rest))}</ul>
  </div>
);

export default Home;
