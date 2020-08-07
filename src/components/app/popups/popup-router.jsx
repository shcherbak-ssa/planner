'use strict';

/** imports */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
  POPUP_PROFILE_PATH,
  POPUP_SETTINGS_PATH,
  POPUP_CREATE_PROJECT_PATH,
  POPUP_DELETE_PROJECT_PATH,
  POPUP_PROJECT_SETTINGS_PATH,
  POPUP_PROJECT_GOAL_PATH,
  POPUP_PROJECT_TASK_PATH
} from '../constants';

// components
import Profile from './profile';

/** PopupRouter component */
export default function PopupRouter(props) {
  /** render */
  return (
    <Switch>
      <Route path={POPUP_PROFILE_PATH}>
        <Profile/>
      </Route>
      <Route path={POPUP_SETTINGS_PATH}></Route>
      <Route path={POPUP_CREATE_PROJECT_PATH}></Route>
      <Route path={POPUP_DELETE_PROJECT_PATH}></Route>
      <Route path={POPUP_PROJECT_SETTINGS_PATH}></Route>
      <Route path={POPUP_PROJECT_GOAL_PATH}></Route>
      <Route path={POPUP_PROJECT_TASK_PATH}></Route>
    </Switch>
  )
}