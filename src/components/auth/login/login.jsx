'use strict';

/** imports */
import React from 'react';

// components
import Frame from '../components/frame';
import GoogleAuth from '../../components/google-auth';
import Form from '@lib/form';
import Button from '@lib/buttons/button';

/** constants */
const CURRENT_MODE = 'login';

/** Login component */
export default function Login(props) {
  /** data */
  const inputEmailProps = {};
  const inputPasswordProps = {};
  const buttonProps = {
    label: 'Login',
    clickHandler(e) {
      e.preventDefault();
      userDataCreator.setEmail(props.email);
      const userData = userDataCreator.createUserData();
      authEventEmitter.emit(CREATE_ACCOUNT, userData, createAccountCallback);
    }
  };
  
  /** methods */
  function setFramebar() {
    return <GoogleAuth currentMode={CURRENT_MODE}/>
  }

  /** render */
  return (
    <Frame heading="Login" currentMode={CURRENT_MODE} framebar={setFramebar()}>
      <Form.Input/>
      <Form.Input/>
      <Button/>
    </Frame>
  )
}