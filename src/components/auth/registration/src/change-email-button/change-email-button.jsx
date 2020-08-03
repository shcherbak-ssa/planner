'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {ENTRY_EMAIL_PATH} from '../constants';

// assets
import './change-email-button.scss';

// components
import Button from '@lib/buttons/button';

/** constants */

/** ChangeEmailButton component */
export default function ChangeEmailButton(props) {
  /** data */
  const buttonProps = {
    name: 'change-email-button',
    type: 'flat',
    icon: faArrowLeft,
    label: 'Change e-mail',
    clickHandler(e) {}
  };

  /** render */
  return (
    <Link to={ENTRY_EMAIL_PATH}>
      <Button {...buttonProps}/>
    </Link>
  )
}