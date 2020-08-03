'use strict';

/** imports */
import React from 'react';

// components
import RegistrationFrame from '../registration-frame';
import Input from '@lib/form/input';
import Button from '@lib/buttons/button';

/** EntryEmail component */
export default function EntryEmail(props) {
  /** render */
  return (
    <RegistrationFrame type="email"></RegistrationFrame>
  )
}