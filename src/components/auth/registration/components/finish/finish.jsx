'use strict';

/** imports */
import React, {useState, useEffect} from 'react';

import {
  authEventEmitter,
  INIT_FIHISH,
  REMOVE_FINISH,
  CREATE_USER,
} from '@module/events/auth';

// components
import RegistrationFrame from '../registration-frame';
import Input from '@lib/form/input';
import Button from '@lib/buttons/button';

/** Finish component */
export default function Finish(props) {
  /** states */
  const [inputFullnameValue, setInputFullnameValue] = useState('');
  const [inputFullnameError, setInputFullnameError] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputPasswordError, setInputPasswordError] = useState('');

  /** data */
  const inputFullnameProps = {
    value: inputFullnameValue,
    error: inputFullnameError,
    placeholder: 'Full name',
    changeHandler({target: {value}}) {
      setInputFullnameError('');

    }
  };
  const inputEmailProps = {
    readOnly: true,
    value: props.email,
    error: '',
    placeholder: 'E-mail'
  };
  const inputPasswordProps = {
    value: inputPasswordValue,
    error: inputPasswordError,
    placeholder: 'Password',
    changeHandler({target: {value}}) {
      setInputPasswordError('');

    }
  };
  const buttonProps = {
    label: 'Create account',
    clickHandler(e) {
      e.preventDefault();
    }
  };

  /** methods */

  /** effects */
  useEffect(() => {
    authEventEmitter.emit(INIT_FIHISH);
    return () => {
      authEventEmitter.emit(REMOVE_FINISH);
    }
  });
  
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