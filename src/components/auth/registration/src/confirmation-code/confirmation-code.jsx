'use strict';

/** imports */
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FINISH_PATH} from '../constants';

import {
  authEventEmitter,
  INIT_CONFIRM_CODE,
  REMOVE_CONFIRM_CODE,
  CHECK_CONFIRM_CODE,
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
  const history = useHistory();

  /** data */
  const inputProps = {
    value: '',
    error: '',
    placeholder: 'Confirmation code',
    blurCallback(value) {}
  };

  /** effects */
  useEffect(() => {
    authEventEmitter.emit(INIT_CONFIRM_CODE);
    return () => {
      authEventEmitter.emit(REMOVE_CONFIRM_CODE);
    }
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