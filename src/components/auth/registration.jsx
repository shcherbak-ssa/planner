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
  CREATE_ACCOUNT_PATH,
} from './constants';

// components
import EntryEmail from './components/entry-email.jsx';
import ConfirmationCode from './components/confirmation-code';
import CreateAccount from './components/create-account';

/** Registration component */
export default function Registration(props) {
  /** states */
  const [email, setEmail] = useState('');

  /** methods */
  function updateEmail(value) {
    setEmail(value);
  }
  function redirectToEntryEmail() {
    return <Redirect to={ENTRY_EMAIL_PATH}/>
  }
  function drawIfEmailExist(component) {
    return email ? component : redirectToEntryEmail();
  }

  /** render */
  return (
    <Switch>
      <Route exact path={REGISTRATION_PATH}>
        {redirectToEntryEmail()}
      </Route>
      <Route path={ENTRY_EMAIL_PATH}>
        <EntryEmail email={email} updateEmail={updateEmail} />
      </Route>
      <Route path={CONFIRMATION_CODE_PATH}>
        {drawIfEmailExist(<ConfirmationCode email={email} />)}
      </Route>
      <Route path={CREATE_ACCOUNT_PATH}>
        {drawIfEmailExist(<CreateAccount email={email} />)}
      </Route>
    </Switch>
  )
}