'use strict';

/** imports */
import React from 'react';

// components
import Frame from '../frame';
import GoogleAuth from '../google-auth';

/** constants */
const CURRENT_MODE = 'registration';

/** Registration component */
export default function Registration(props) {
  /** data */
  const framebar = <GoogleAuth currentMode={CURRENT_MODE}/>;

  /** render */
  return (
    <Frame heading="Registration" currentMode={CURRENT_MODE} framebar={framebar}>
      Registration
    </Frame>
  )
}