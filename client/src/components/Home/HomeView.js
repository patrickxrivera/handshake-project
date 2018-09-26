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

const renderAlarm = ({ _id, text, upvotes }) => (
  <ListWrapper>
    <List key={_id}>
      <div>
        <span>{text.toUpperCase()}</span>
      </div>
      <UpvoteWrapper>
        <span>{upvotes}</span>
        <button>Upvote</button>
        <button>Downvote</button>
      </UpvoteWrapper>
    </List>
  </ListWrapper>
);

const Home = ({ alarms }) => (
  <div>
    <h3>All Alarms</h3>
    <ul>{alarms.reverse().map(renderAlarm)}</ul>
  </div>
);

export default Home;
