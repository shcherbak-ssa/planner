'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {
  authEventEmitter,
  INIT_CREATE_ACCOUNT,
  REMOVE_CREATE_ACCOUNT,
  GET_USER_DATA_CREATOR,
  CREATE_ACCOUNT,
} from '@module/events/auth';

// components
import RegistrationFrame from './registration-frame';
import Form from '@lib/form';
import Button from '@lib/buttons/button';

/** CreateAccount component */
export default function CreateAccount(props) {
  /** states */
  const [inputFullnameValue, setInputFullnameValue] = useState('');
  const [inputFullnameError, setInputFullnameError] = useState('');

  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputPasswordError, setInputPasswordError] = useState('');
  
  const [checkboxIsSelected, setCheckboxIsSelected] = useState(false);
  const [checkboxIsError, setCheckboxIsError] = useState(false);

  const [userDataCreator, setUserDataCreator] = useState(0);

  const history = useHistory();

  /** data */
  const inputFullnameProps = {
    value: inputFullnameValue,
    error: inputFullnameError,
    placeholder: 'Full name',
    changeHandler({target: {value}}) {
      if (inputFullnameError) setInputFullnameError('');
      userDataCreator.setFullname(value);
      setInputFullnameValue(value);
    }
  };
  const inputEmailProps = {
    readOnly: true,
    value: props.email,
    error: '',
    placeholder: 'E-mail',
    changeHandler() {}
  };
  const inputPasswordProps = {
    type: 'password',
    value: inputPasswordValue,
    error: inputPasswordError,
    placeholder: 'Password',
    changeHandler({target: {value}}) {
      if (inputPasswordError) setInputPasswordError('');
      userDataCreator.setPassword(value);
      setInputPasswordValue(value);
    }
  };
  const checkboxProps = {
    isSelected: checkboxIsSelected,
    isError: checkboxIsError,
    description: <div>I accept the terms of the offer of the <span>privacy policy</span></div>,
    clickHandler() {
      const reverseCheckboxIsSelected = !checkboxIsSelected;
      //if (reverseCheckboxIsSelected) setCheckboxIsError(false);
      userDataCreator.setPrivacyPolicy(reverseCheckboxIsSelected);
      setCheckboxIsSelected(reverseCheckboxIsSelected);
    }
  };
  const buttonProps = {
    label: 'Create account',
    clickHandler(e) {
      e.preventDefault();
      userDataCreator.setEmail(props.email);
      const userData = userDataCreator.createUserData();
      authEventEmitter.emit(CREATE_ACCOUNT, userData, createAccountCallback);
    }
  };

  /** methods */
  function createAccountCallback(error) {
    if (error) return setError(error);
    //history.push('/');
  }
  function setError({type, message}) {
    switch(type) {
      case 'fullname': return setInputFullnameError(message);
      case 'password': return setInputPasswordError(message);
      case 'privacy': return setCheckboxIsError(true);
      default: return;
    }
  }

  /** effects */
  useEffect(() => {
    authEventEmitter.emit(INIT_CREATE_ACCOUNT);
    return () => {
      authEventEmitter.emit(REMOVE_CREATE_ACCOUNT);
    }
  }, []);
  useEffect(() => {
    authEventEmitter.emit(GET_USER_DATA_CREATOR, (creator) => {
      setUserDataCreator(creator);
    });
  }, []);
  
  /** render */
  return (
    <RegistrationFrame>
      <Form.Input {...inputFullnameProps}/>
      <Form.Input {...inputEmailProps}/>
      <Form.Input {...inputPasswordProps}/>
      <Form.Checkbox {...checkboxProps}/>
      <Button {...buttonProps}/>
    </RegistrationFrame>
  )
}