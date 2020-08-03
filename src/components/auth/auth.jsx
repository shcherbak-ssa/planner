'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import importModule from '@module/tools/import-module';

/** Auth component */
export default function Auth(props) {
  /** states */
  const [mode, setMode] = useState(props.mode);

  /** data */
  let AuthComponent = '';

  /** effect */
  useEffect(async () => {
    const authComponentPath = createAuthComponentPath();
    AuthComponent = await importModule(authComponentPath);
  });

  /** methods */
  function createAuthComponentPath() {
    return `./${mode}`;
  }

  /** render */
  return <AuthComponent/>
}