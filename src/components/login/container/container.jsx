'use strict';

/** imports */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

// assets
import './container.scss';
import './login-bg.jpg';

// components
import Typography from '@lib/typography';

/** Container component */
export default function Container(props) {
  /** render */
  return (
    <div className="container" data-class="full">
      <Router>
        <Link to="/">
          <Typography.Heading name="container-logo" type="5">Planner</Typography.Heading>
        </Link>
        <Switch>
          <Route exact path="/">
            <Redirect to="/registration"/>
          </Route>
          <Route path="/registration"></Route>
          <Route path="/login"></Route>
        </Switch>
      </Router>
      <div className="container-bg-shadow" data-class="full"></div>
    </div>
  )
}