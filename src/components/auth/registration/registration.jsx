'use strict';

/** imports */
import React, {useState} from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  REGISTRATION_PATH,
  ENTRY_EMAIL_PATH,
  CONFIRMATION_CODE_PATH,
  FINISH_PATH,
} from './src/constants';

// components
import EntryEmail from './src/entry-email.jsx';
import ConfirmationCode from './src/confirmation-code';
import Finish from './src/finish';

/** Registration component */
export default function Registration(props) {
  /** states */
  const [email, setEmail] = useState('');

  /** methods */
  function updateEmail(value) {
    setEmail(value);
  }

  /** render */
  return (
    <Switch>
      <Route exact path={REGISTRATION_PATH}>
        <Redirect to={ENTRY_EMAIL_PATH}/>
      </Route>
      <Route path={ENTRY_EMAIL_PATH}>
        <EntryEmail email={email} updateEmail={updateEmail} />
      </Route>
      <Route path={CONFIRMATION_CODE_PATH}>
        <ConfirmationCode email={email} />
      </Route>
      <Route path={FINISH_PATH}>
        <Finish email={email} />
      </Route>
    </Switch>
  )
}