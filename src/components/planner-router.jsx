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
export default function PlannerRouter({isUserLogged}) {
  /** data */
  const AppComponent = lazy(() => import('./app'));
  const AuthComponent = lazy(() => import('./auth'));
  // const AuthComponent = () => <div>Auth</div>

  /** methods */
  function setInitialComponent() {
    return isUserLogged ? <AppComponent/> : <Redirect to="/login"/>
  }
  function useExactProp() {
    return isUserLogged ? {} : {exact: true};
  }

  /** render */
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" {...useExactProp()}>
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