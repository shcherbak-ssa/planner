'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';

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

  };
  /** render */
  return (
    <RegistrationFrame type="email">
      <Input {...inputProps}/>
      <Link>
        <Button {...buttonProps}/>
      </Link>
    </RegistrationFrame>
  )
}