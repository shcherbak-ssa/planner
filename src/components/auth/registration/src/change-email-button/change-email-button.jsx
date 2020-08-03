'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

// assets
import './change-email-button.scss';

// components
import Button from '@lib/buttons/button';

/** constants */
const CHANGE_EMAIL_PATH = '/registration/email';

/** ChangeEmailButton component */
export default function ChangeEmailButton(props) {
  /** data */
  const buttonProps = {
    name: 'change-email-button',
    type: 'flat',
    icon: faArrowLeft,
    lable: 'Change e-mail',
    clickHandler(e) {}
  };

  /** render */
  return (
    <Link to={CHANGE_EMAIL_PATH}>
      <Button {...buttonProps}/>
    </Link>
  )
}