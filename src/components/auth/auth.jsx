'use strict';

/** imports */
import React from 'react';
import {
  authEventEmitter,
  INIT_REGISTRATION,
  INIT_LOGIN,
} from '@module/events/auth';

// components
import Container from './container';
import Login from './login';
import Registration from './registration';

/** Auth component */
export default function Auth(props) {
  /** methods */
  function getModeComponent() {
    switch(props.mode) {
      case 'login':
        authEventEmitter.emit(INIT_LOGIN);
        return <Login/>
      case 'registration':
        authEventEmitter.emit(INIT_REGISTRATION);
        return <Registration/>
    }
  }

  /** render */
  return (
    <Container>
      {getModeComponent()}
    </Container>
  )
}