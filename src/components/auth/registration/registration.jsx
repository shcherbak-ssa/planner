'use strict';

/** imports */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  REGISTRATION_PATH,
  ENTRY_EMAIL_PATH,
  CONFIRMATION_CODE_PATH,
  FINISH_PATH,
} from './src/constants';

/** Registration component */
export default function Registration(props) {
  /** render */
  return (
    <Switch>
      <Route exact path={REGISTRATION_PATH}>
        <Redirect to={ENTRY_EMAIL_PATH}/>
      </Route>
      <Route path={ENTRY_EMAIL_PATH}>
        
      </Route>
      <Route path={CONFIRMATION_CODE_PATH}>
        
      </Route>
      <Route path={FINISH_PATH}>
        
      </Route>
    </Switch>
  )
}