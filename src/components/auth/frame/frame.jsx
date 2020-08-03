'use strict';

/** imports */
import React from 'react';
import './frame.scss';

// components
import Typography from '@lib/typography';
import ChangeModeButton from './src/change-mode-button';

/** constants */
const modeLabels = {
  login: 'Do not have an account?',
  registration: 'Already have an account?'
};

/** Frame component */
export default function Frame(props) {
  /** data */
  const {mode} = props;
  const changeModeButtonLabel = modeLabels[mode];

  /** render */
  return (
    <div className="frame" data-class="bs bsh fbr pc white">
      <Typography.Heading type="4" name="frame-heading">{props.heading}</Typography.Heading>
      {props.children}
      <ChangeModeButton label={changeModeButtonLabel} mode={`/${mode}`}/>
    </div>
  )
}