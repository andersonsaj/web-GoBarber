import React from 'react';
import { Switch } from 'react-router-dom';
import Dashbord from '../pages/Dashbord';
import SignIn from '../pages/SignIn/intex';
import SignUp from '../pages/SignUp/intex';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/dashbord" component={Dashbord} isPrivate />
  </Switch>
);

export default Routes;
