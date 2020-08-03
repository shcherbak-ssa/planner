'use strict';

/** imports */
import React from 'react';
import './confirmation-code.scss';

// components
import RegistrationFrame from './registration-frame';
import Typography from '@lib/typography';
import Input from '@lib/form/input';

/** ConfirmationCode component */
export default function ConfirmationCode(props) {
  /** data */
  const inputProps = {
    value: '',
    error: '',
    placeholder: 'Confirmation code',
    blurCallback(value) {}
  };
  
  /** render */
  return (
    <RegistrationFrame>
      <Typography.Paragraph type="1" name="confirmation-code-message">
        A confirmation code was sent to your email
      </Typography.Paragraph>
      <Input {...inputProps}/>
    </RegistrationFrame>
  )
}