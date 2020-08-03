'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {CONFIRMATION_CODE_PATH} from '../constants';

// components
import RegistrationFrame from '../registration-frame';
import Input from '@lib/form/input';
import Button from '@lib/buttons/button';

/** EntryEmail component */
export default function EntryEmail(props) {
  /** data */
  const inputProps = {
    name: 'entry-email-input',
    value: '',
    error: '',
    placeholder: 'E-mail',
    blurCallback(value) {}
  };
  const buttonProps = {
    iconRight: true,
    icon: faAngleRight,
    label: 'Continue',
    clickHandler(e) {}
  };
  
  /** render */
  return (
    <RegistrationFrame type="email">
      <Input {...inputProps}/>
      <Link to={CONFIRMATION_CODE_PATH}>
        <Button {...buttonProps}/>
      </Link>
    </RegistrationFrame>
  )
}