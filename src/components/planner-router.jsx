'use strict';

/** imports */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

/** PlannerRouter component */
export default function PlannerRouter(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/registration"/>
        </Route>
        <Route path="/registration"></Route>
        <Route path="/login"></Route>
      </Switch>
    </Router>
  )
}