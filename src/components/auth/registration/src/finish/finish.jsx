'use strict';

/** imports */
import React from 'react';

// components
import RegistrationFrame from '../registration-frame';
import Input from '@lib/form/input';
import Button from '@lib/buttons/button';

/** Finish component */
export default function Finish(props) {
  /** data */
  const inputFullnameProps = {
    value: '',
    error: '',
    placeholder: 'Full name',
    blurCallback(value) {}
  };
  const inputEmailProps = {
    readOnly: true,
    value: props.email,
    error: '',
    placeholder: 'E-mail'
  };
  const inputPasswordProps = {
    value: '',
    error: '',
    placeholder: 'Password',
    blurCallback(value) {}
  };
  const buttonProps = {
    label: 'Create account',
    clickHandler(e) {}
  };
  
  /** render */
  return (
    <RegistrationFrame>
      <Input {...inputFullnameProps}/>
      <Input {...inputEmailProps}/>
      <Input {...inputPasswordProps}/>
      <Button {...buttonProps}/>
    </RegistrationFrame>
  )
}