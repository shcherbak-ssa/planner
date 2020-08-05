'use strict';

/** imports */
import React from 'react';
import './frame.scss';

// components
import Typography from '@lib/typography';
import ChangeModeButton from '../change-mode-button';
import Framebar from '../framebar';

/** constants */
const modeLabels = {
  login: 'Do not have an account?',
  registration: 'Already have an account?'
};

/** Frame component */
export default function Frame(props) {
  /** data */
  const {currentMode} = props;
  const changeModeButtonLabel = modeLabels[currentMode];

  /** methods */
  function getNextMode() {
    return currentMode === 'login' ? 'registration' : 'login'
  }

  /** render */
  return (
    <div className="frame" data-class="bs bsh fbr pc white">
      <Typography.Heading type="4" name="frame-heading">{props.heading}</Typography.Heading>
      <Framebar>{props.framebar}</Framebar>
      <div className="frame-form">
        {props.children}
      </div>
      <ChangeModeButton label={changeModeButtonLabel} nextMode={`/${getNextMode()}`}/>
    </div>
  )
}