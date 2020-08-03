'use strict';

/** imports */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// components
import Auth from './auth';

/** PlannerRouter component */
export default function PlannerRouter(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/registration"/>
        </Route>
        <Route path="/registration">
          <Auth mode="registration"/>
        </Route>
        <Route path="/login">
          <Auth mode="login"/>
        </Route>
      </Switch>
    </Router>
  )
}