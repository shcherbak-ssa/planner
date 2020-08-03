'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';

// components
import Button from '@lib/buttons/button'

/** ChangeModeButton component */
export default function ChangeModeButton(props) {
  /** data */
  const buttonProps = {
    color: 'flat'
  };
  /** render */
  return (
    <Link>
      <Button></Button>
    </Link>
  )
}