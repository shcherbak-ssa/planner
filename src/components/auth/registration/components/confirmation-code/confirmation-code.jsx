'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FINISH_PATH} from '../../constants';

import {
  authEventEmitter,
  INIT_CONFIRM_CODE,
  REMOVE_CONFIRM_CODE,
  GET_CONFIRM_CODE_LENGTH,
  VALIDATE_CONFIRM_CODE,
} from '@module/events/auth';

// assets
import './confirmation-code.scss';

// components
import RegistrationFrame from '../registration-frame';
import Typography from '@lib/typography';
import Input from '@lib/form/input';

/** ConfirmationCode component */
export default function ConfirmationCode(props) {
  /** states */
  const [inputError, setInputError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [confirmCodeLength, setConfirmCodeLength] = useState(0);
  const history = useHistory();

  /** data */
  const inputProps = {
    value: inputValue,
    error: inputError,
    placeholder: 'Confirmation code',
    changeHandler({target: {value}}) {
      setInputError('');
      
      const valueLength = value.length;
      if (valueLength > confirmCodeLength) return;
      if (valueLength === confirmCodeLength) {
        authEventEmitter.emit(VALIDATE_CONFIRM_CODE, value, validateConfirmCodeCallback);
        return setInputValue(value);
      }
      setInputValue(value);
    },
  };

  /** methods */
  function validateConfirmCodeCallback(errorMessage) {
    if (errorMessage) return setInputError(errorMessage);
    history.push(FINISH_PATH);
  }

  /** effects */
  useEffect(() => {
    authEventEmitter.emit(INIT_CONFIRM_CODE);
    return () => {
      authEventEmitter.emit(REMOVE_CONFIRM_CODE);
    }
  });
  useEffect(() => {
    authEventEmitter.emit(GET_CONFIRM_CODE_LENGTH, (length) => {
      setConfirmCodeLength(length);
    });
  });
  
  /** render */
  return (
    <RegistrationFrame>
      <Typography.Paragraph type="1" name="confirmation-code-message">
        A confirmation code was sent to your email
        <span> {props.email}</span>
      </Typography.Paragraph>
      <Input {...inputProps}/>
    </RegistrationFrame>
  )
}