'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import {
  authEventEmitter,
  REMOVE_LOGIN,
  GET_USER_DATA_CREATOR,
  LOGIN_ACCOUNT,
} from '@module/events/auth';

// components
import Frame from './components/frame';
import GoogleAuth from './components/google-auth';
import InputPassword from './components/input-password';
import Form from '@lib/form';
import Button from '@lib/button';

/** constants */
const CURRENT_MODE = 'login';

/** Login component */
export default function Login(props) {
  /** states */
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputEmailError, setInputEmailError] = useState('');
  const [inputPasswordError, setInputPasswordError] = useState('');

  const [userDataCreator, setUserDataCreator] = useState(0);

  /** data */
  const inputEmailProps = {
    value: inputEmailValue,
    error: inputEmailError,
    placeholder: 'E-mail',
    changeHandler({target: {value}}) {
      if (inputEmailError) setInputEmailError('');
      userDataCreator.setEmail(value);
      setInputEmailValue(value);
    },
  };
  const inputPasswordProps = {
    error: inputPasswordError,
    removeError() {
      setInputPasswordError('');
    },
    setInputValue(value) {
      userDataCreator.setPassword(value);
    }
  };
  const buttonProps = {
    label: 'Login',
    clickHandler() {
      const userData = userDataCreator.createUserData();
      authEventEmitter.emit(LOGIN_ACCOUNT, userData, loginAccountCallback);
    }
  };
  
  /** methods */
  function loginAccountCallback(error) {
    if (error) return setError(error);
  }
  function setError({type, message}) {
    switch(type) {
      case 'email': return setInputEmailError(message);
      case 'password': return setInputPasswordError(message);
      default: return;
    }
  }
  function setFramebar() {
    return <GoogleAuth currentMode={CURRENT_MODE}/>
  }

  /** effects */
  useEffect(() => {
    return () => {
      authEventEmitter.emit(REMOVE_LOGIN);
    }
  }, []);
  useEffect(() => {
    authEventEmitter.emit(GET_USER_DATA_CREATOR, (creator) => {
      setUserDataCreator(creator);
    })
  }, []);

  /** render */
  return (
    <Frame heading="Login" currentMode={CURRENT_MODE} framebar={setFramebar()}>
      <Form.Input {...inputEmailProps}/>
      <InputPassword {...inputPasswordProps}/>
      <Button.Default {...buttonProps}/>
    </Frame>
  )
}