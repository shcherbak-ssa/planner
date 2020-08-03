'use strict';

/** imports */
import React from 'react';

// components
import Container from './container';
import Login from './login';
import Registration from './registration';

/** Auth component */
export default function Auth(props) {
  /** methods */
  function getModeComponent() {
    switch(props.mode) {
      case 'login': return <Login/>
      case 'registration': return <Registration/>
    }
  }

  /** render */
  return (
    <Container>
      {getModeComponent()}
    </Container>
  )
}