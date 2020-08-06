'use strict';

/** imports */
import React from 'react';
import {Switch, Route} from 'react-router-dom';

/** AppRouter component */
export default function AppRouter(props) {
  /** render */
  return (
    <Switch>
      <Route exact path="/"></Route>
    </Switch>
  )
}