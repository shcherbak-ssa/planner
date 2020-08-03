'use strict';

/** imports */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

// components
import Frame from '../frame';
import GoogleAuth from '../google-auth';

/** constants */
const CURRENT_MODE = 'registration';

/** Registration component */
export default function Registration(props) {
  /** data */
  const {path} = useRouteMatch();
  const framebar = <GoogleAuth currentMode={CURRENT_MODE}/>;

  /** render */
  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/email`}/>
      </Route>
      <Route path={`${path}/email`}>
        <Frame heading="Registration" currentMode={CURRENT_MODE} framebar={framebar}>
          Registration
        </Frame>
      </Route>
      <Route path={`${path}/code`}>
        
      </Route>
      <Route path={`${path}/finish`}>
        
      </Route>
    </Switch>
  )
}