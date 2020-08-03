'use strict';

/** imports */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

/** Registration component */
export default function Registration(props) {
  /** data */
  const {path} = useRouteMatch();

  /** render */
  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/email`}/>
      </Route>
      <Route path={`${path}/email`}>
        
      </Route>
      <Route path={`${path}/code`}>
        
      </Route>
      <Route path={`${path}/finish`}>
        
      </Route>
    </Switch>
  )
}