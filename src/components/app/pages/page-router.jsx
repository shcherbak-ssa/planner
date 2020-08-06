'use strict';

/** imports */
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {
  ROOT_PATH,
  PROJECT_LIST_PATH,
  PROJECT_PATH,
} from './constants';

/** PageRouter component */
export default function PageRouter(props) {
  /** render */
  return (
    <Switch>
      <Route exact path={ROOT_PATH}>
        <Redirect to={PROJECT_LIST_PATH}/>
      </Route>
      <Route path={PROJECT_LIST_PATH}></Route>
      <Route path={PROJECT_PATH}></Route>
    </Switch>
  )
}