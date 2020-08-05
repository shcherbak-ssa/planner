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
  /** methods */
  function setRootComponent() {
    return props.isUserLogged ? <h1>App</h1> : <Redirect to="/registration"/>
  }

  /** render */
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {setRootComponent()}
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