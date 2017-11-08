import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';

import App from '../components/App'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

export default {
  <Route path ="/" component ={App}>
    <Route path="signup" component={SignUp} />
    <Route path="login" component={Login} />
  </Route>
}
