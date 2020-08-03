'use strict';

/** imports */
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FINISH_PATH} from '../constants';

// assets
import './confirmation-code.scss';

// components
import RegistrationFrame from '../registration-frame';
import Typography from '@lib/typography';
import Input from '@lib/form/input';

/** ConfirmationCode component */
export default function ConfirmationCode(props) {
  /** data */
  const history = useHistory();
  const inputProps = {
    value: '',
    error: '',
    placeholder: 'Confirmation code',
    blurCallback(value) {}
  };

  /** effects */
  useEffect(() => {
    setTimeout(() => {
      history.push(FINISH_PATH);
    }, 3000)
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