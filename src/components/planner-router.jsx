'use strict';

/** imports */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

/** PlannerRouter component */
export default function PlannerRouter(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  )
}