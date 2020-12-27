import React from 'react';
import { Switch } from 'react-router-dom';
import Dashbord from '../pages/Dashbord';
import ForgotPassword from '../pages/ForgotPassword/intex';
import ResetPassword from '../pages/ResetPassword/intex';
import SignIn from '../pages/SignIn/intex';
import SignUp from '../pages/SignUp/intex';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashbord" component={Dashbord} isPrivate />
  </Switch>
);

export default Routes;
