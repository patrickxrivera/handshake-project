import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Wrapper } from './AppStyles';
import { HomeContainer } from '../Home';

const App = () => (
  <Wrapper>
    <Router>
      <Switch>
        <Route path="/" component={HomeContainer} />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
