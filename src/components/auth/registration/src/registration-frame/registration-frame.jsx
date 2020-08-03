'use strict';

/** imports */
import React from 'react';

// components
import Frame from '../frame';
import GoogleAuth from '../google-auth';

/** constants */
const CURRENT_MODE = 'registration';

/** RegistrationFrame component */
export default function RegistrationFrame(props) {
  /** data */
  const framebar = <GoogleAuth currentMode={CURRENT_MODE}/>;

  /** methods */
  function getFramebar() {}

  /** render */
  return (
    <Frame heading="Registration" currentMode={CURRENT_MODE} framebar={framebar}>
      Registration
    </Frame>
  )
}