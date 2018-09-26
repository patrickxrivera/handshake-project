import React from 'react';

const renderName = ({ name, _id }) => <li key={_id}>{name}</li>;

const Home = ({ restaurants }) => (
  <div>
    <h3>Awesome Restaurants</h3>
    <ul>{restaurants.map(renderName)}</ul>
  </div>
);

export default Home;
