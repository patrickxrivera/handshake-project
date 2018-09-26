import React from 'react';
import { UpvoteWrapper, ListWrapper, List } from './styles';

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
    <ul>{alarms.map(renderAlarm(rest))}</ul>
  </div>
);

export default Home;
