import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import MainLayout from '../layouts/MainLayout';
import Question from '../pages/Question';
import CreatePoll from '../pages/CreatePoll';
import CreateUser from '../pages/CreateUser';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/createpoll">
          <CreatePoll />
        </Route>
        <Route exact path="/question">
          <Question />
        </Route>
        <Route exact path="/">
          <CreateUser />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
