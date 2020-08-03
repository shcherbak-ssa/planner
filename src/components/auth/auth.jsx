'use strict';

/** imports */
import React, {useState} from 'react';

// components
import Login from './login';
import Registration from './registration';

/** Auth component */
export default function Auth(props) {
  /** states */
  const [mode, setMode] = useState(props.mode);

  /** methods */
  function changeMode() {
    mode === 'login' ? setMode('registration') : setMode('login');
  }

  /** render */
  switch(mode) {
    case 'login': return <Login/>
    case 'registration': return <Registration/>
  }
}