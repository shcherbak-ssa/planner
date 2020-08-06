'use strict';

/** imports */
import React from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import {
  ROOT_PATH,
  PROJECT_LIST_PATH,
  PROJECT_PATH,
} from '../constants';

/** PageRouter component */
export default function PageRouter(props) {
  /** states */
  const location = useLocation();
  const background = location.state && location.state.background;

  /** render */
  return (
    <Switch location={background || location}>
      <Route exact path={ROOT_PATH}>
        <Redirect to={PROJECT_LIST_PATH}/>
      </Route>
      <Route path={PROJECT_LIST_PATH}></Route>
      <Route path={PROJECT_PATH}></Route>
    </Switch>
  )
}