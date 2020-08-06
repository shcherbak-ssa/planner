'use strict';

/** imports */
import React, {Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

/** PlannerRouter component */
export default function PlannerRouter(props) {
  /** data */
  const AppComponent = lazy(() => import('./app'));
  //const AuthComponent = lazy(() => import('./auth'));
  const AuthComponent = () => <div>Auth</div>

  /** methods */
  function setInitialComponent() {
    return props.isUserLogged ? <AppComponent/> : <Redirect to="/login"/>
  }

  /** render */
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/">
            {setInitialComponent()}
          </Route>
          <Route path="/registration">
            <AuthComponent mode="registration"/>
          </Route>
          <Route path="/login">
            <AuthComponent mode="login"/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}