'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {CONFIRMATION_CODE_PATH} from '../constants';

import {
  authEventEmitter,
  INIT_ENTRY_EMAIL,
  REMOVE_ENTRY_EMAIL,
  VALIDATE_ENTRY_EMAIL,
  SEND_CONFIRM_CODE_TO_EMAIL,
} from '@module/events/auth';

// components
import RegistrationFrame from './registration-frame';
import Form from '@lib/form';
import Button from '@lib/button/';

/** EntryEmail component */
export default function EntryEmail(props) {
  /** states */
  const [inputError, setInputError] = useState('');
  const history = useHistory();

  /** data */
  const inputProps = {
    value: props.email,
    error: inputError,
    placeholder: 'E-mail',
    changeHandler({target}) {
      props.updateEmail(target.value);
      if (inputError) setInputError('');
    },
  };
  const buttonProps = {
    iconRight: true,
    icon: faAngleRight,
    label: 'Continue',
    clickHandler(e) {
      e.preventDefault();
      if (props.email === '') return setInputError('Required to entry e-mail');
      authEventEmitter.emit(VALIDATE_ENTRY_EMAIL, props.email, validateEmailCallback);
    }
  };

  /** methods */
  function validateEmailCallback(errorMessage) {
    if (errorMessage) return setInputError(errorMessage);
    authEventEmitter.emit(SEND_CONFIRM_CODE_TO_EMAIL);
    history.push(CONFIRMATION_CODE_PATH);
  }

  /** effects */
  useEffect(() => {
    authEventEmitter.emit(INIT_ENTRY_EMAIL);
    return () => {
      authEventEmitter.emit(REMOVE_ENTRY_EMAIL)
    }
  }, []);
  
  /** render */
  return (
    <RegistrationFrame type="email">
      <Form.Input {...inputProps}/>
      <Button.Default {...buttonProps}/>
    </RegistrationFrame>
  )
}