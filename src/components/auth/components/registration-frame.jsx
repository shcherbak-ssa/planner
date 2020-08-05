'use strict';

/** imports */
import React from 'react';

// components
import Frame from './frame';
import GoogleAuth from './google-auth';
import ChangeEmailButton from './change-email-button';

/** constants */
const CURRENT_MODE = 'registration';

/** RegistrationFrame component */
export default function RegistrationFrame(props) {
  /** methods */
  function getFramebar() {
    return props.type === 'email'
      ? <GoogleAuth currentMode={CURRENT_MODE}/>
      : <ChangeEmailButton/>
  }

  /** render */
  return (
    <Frame heading="Registration" currentMode={CURRENT_MODE} framebar={getFramebar()}>
      {props.children}
    </Frame>
  )
}