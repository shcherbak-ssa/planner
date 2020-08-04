'use strict';

/** imports */
import React, {useState, useEffect} from 'react';

import {
  authEventEmitter,
  INIT_CREATE_ACCOUNT,
  REMOVE_CREATE_ACCOUNT,
  GET_USER_DATA_CREATOR,
  CREATE_ACCOUNT,
} from '@module/events/auth';

// components
import RegistrationFrame from '../registration-frame';
import Input from '@lib/form/input';
import Button from '@lib/buttons/button';

/** CreateAccount component */
export default function CreateAccount(props) {
  /** states */
  const [inputFullnameValue, setInputFullnameValue] = useState('');
  const [inputFullnameError, setInputFullnameError] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputPasswordError, setInputPasswordError] = useState('');

  const [userDataCreator, setUserDataCreator] = useState(null);

  /** data */
  const inputFullnameProps = {
    value: inputFullnameValue,
    error: inputFullnameError,
    placeholder: 'Full name',
    changeHandler({target: {value}}) {
      setInputFullnameError('');
      setInputFullnameValue(value);
      userDataCreator.setFullname(value);
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
      const userData = userDataCreator.createUserData();
      authEventEmitter.emit(CREATE_ACCOUNT, userData, createAccountCallback);
    }
  };

  /** methods */
  function createAccountCallback(error) {
    if (error) return;

  }

  /** effects */
  useEffect(() => {
    authEventEmitter.emit(INIT_CREATE_ACCOUNT);
    return () => {
      authEventEmitter.emit(REMOVE_CREATE_ACCOUNT);
    }
  });
  useEffect(() => {
    authEventEmitter.emit(GET_USER_DATA_CREATOR, (creator) => {
      setUserDataCreator(creator);
      userDataCreator.setEmail(props.email);
    });
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