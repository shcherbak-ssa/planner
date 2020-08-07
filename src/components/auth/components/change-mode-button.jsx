'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';

// components
import Button from '@lib/button'

/** ChangeModeButton component */
export default function ChangeModeButton(props) {
  /** data */
  const buttonProps = {
    name: 'change-mode-button',
    type: 'flat',
    label: props.label,
    clickHandler(e) {
      //e.preventDefault();
    }
  };

  /** render */
  return (
    <Link to={props.nextMode}>
      <Button.Default {...buttonProps}/>
    </Link>
  )
}