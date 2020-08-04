'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {CONFIRMATION_CODE_PATH} from './constants';

import {
  authEventEmitter,
  INIT_ENTRY_EMAIL,
  REMOVE_ENTRY_EMAIL,
  CHECK_EMAIL,
} from '@module/events/auth';

// components
import RegistrationFrame from './registration-frame';
import Input from '@lib/form/input';
import Button from '@lib/buttons/button';

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
    blurCallback(value) {
      props.updateEmail(value);
    }
  };
  const buttonProps = {
    iconRight: true,
    icon: faAngleRight,
    label: 'Continue',
    clickHandler(e) {
      e.preventDefault();
      if (props.email === '') return setInputError('Required to entry e-mail');
      authEventEmitter.emit(CHECK_EMAIL, props.email, checkEmailCallback);
    }
  };

  /** methods */
  function checkEmailCallback(errorMessage) {
    if (errorMessage) return setInputError(errorMessage);
    history.push(CONFIRMATION_CODE_PATH);
  }

  /** effects */
  useEffect(() => {
    authEventEmitter.emit(INIT_ENTRY_EMAIL);
    return () => {
      authEventEmitter.emit(REMOVE_ENTRY_EMAIL)
    }
  });
  
  /** render */
  return (
    <RegistrationFrame type="email">
      <Input {...inputProps}/>
      <Button {...buttonProps}/>
    </RegistrationFrame>
  )
}