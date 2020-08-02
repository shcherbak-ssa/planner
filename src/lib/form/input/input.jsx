'use strict';

/** imports */
import React from 'react';
import './input.scss';

/** Input component */
export default function Input(props) {
  const attributes = {
    'data-class': 'bsh click'
  };

  return (
    <div className="input" {...attributes}>
      <input type="text" className="input-field"/>
      <div className="input-placeholder">{props.placeholder}</div>
      <div className="input-error">{props.error}</div>
    </div>
  )
}