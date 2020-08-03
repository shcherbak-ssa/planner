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
  /** data */
  const rootPath = createRootPath();
  
  /** methods */
  function createRootPath() {
    return props.rootMode === 'app' ? '/' : `/${props.rootMode}`;
  }
  function setRootComponent() {
    return rootPath === '/' ? <h1>App</h1> : <Redirect to={rootPath}/>
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