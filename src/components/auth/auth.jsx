'use strict';

/** imports */
import React from 'react';

// components
import Login from './login';
import Registration from './registration';

/** Auth component */
export default function Auth(props) {
  
  /** render */
  switch(props.mode) {
    case 'login': return <Login/>
    case 'registration': return <Registration/>
  }
}