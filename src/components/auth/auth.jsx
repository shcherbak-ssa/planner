'use strict';

/** imports */
import React, {Suspense, lazy} from 'react';
import {
  authEventEmitter,
  INIT_REGISTRATION,
  INIT_LOGIN,
} from '@module/events/auth';

// components
import Container from './components/container';

/** Auth component */
export default function Auth(props) {
  /** data */
  const LoginComponent = lazy(() => import('./login'));
  const RegistrationComponent = lazy(() => import('./registration'));

  /** methods */
  function getModeComponent() {
    switch(props.mode) {
      case 'login':
        authEventEmitter.emit(INIT_LOGIN);
        return <LoginComponent/>
      case 'registration':
        authEventEmitter.emit(INIT_REGISTRATION);
        return <RegistrationComponent/>
    }
  }

  /** render */
  return (
    <Container>
      <Suspense>
        {getModeComponent()}
      </Suspense>
    </Container>
  )
}