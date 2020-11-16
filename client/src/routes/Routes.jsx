import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import { GlobalUserState } from '../context/GlobalUserContext';
import { GlobalQuestionState } from '../context/GlobalQuestionContext';
import MainLayout from '../layouts/MainLayout';
import Question from '../pages/Question';
import CreatePoll from '../pages/CreatePoll';
import CreateUser from '../pages/CreateUser';
import Results from '../pages/Results';

const Routes = () => (
  <GlobalUserState>
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/createpoll">
            <CreatePoll />
          </Route>
          <Route exact path="/question/:id">
            <Question />
          </Route>
          <Route exact path="/">
            <CreateUser />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  </GlobalUserState>
);

export default Routes;
