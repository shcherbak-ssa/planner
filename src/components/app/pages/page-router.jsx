'use strict';

/** imports */
import React from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import {
  PAGE_HOME_PATH,
  PAGE_PROJECT_LIST_PATH,
  PAGE_PROJECT_DETAILS_PATH,
  PAGE_PROJECT_TASK_LIST_PATH,
  PAGE_PROJECT_TASK_OPEN_PATH,
} from '../constants';

/** PageRouter component */
export default function PageRouter(props) {
  /** states */
  const location = useLocation();
  const background = location.state && location.state.background;

  /** render */
  return (
    <Switch location={background || location}>
      <Route exact path={PAGE_HOME_PATH}>
        <Redirect to={PAGE_PROJECT_LIST_PATH}/>
      </Route>
      <Route path={PAGE_PROJECT_LIST_PATH}></Route>
      <Route path={PAGE_PROJECT_DETAILS_PATH}></Route>
      <Route path={PAGE_PROJECT_TASK_LIST_PATH}></Route>
      <Route path={PAGE_PROJECT_TASK_OPEN_PATH}></Route>
    </Switch>
  )
}